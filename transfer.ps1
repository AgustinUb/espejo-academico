# Script para transferir el proyecto al servidor SSH

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Transferencia al Servidor - Grupo 8" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

$projectPath = "c:\Users\Aorus\Documents\PRactica1Final"
$archiveName = "practica1-dashboard.zip"

# Comprimir proyecto
Write-Host "1. Comprimiendo proyecto..." -ForegroundColor Yellow

Compress-Archive -Path "$projectPath\*" -DestinationPath "$projectPath\$archiveName" -Force -CompressionLevel Optimal

Write-Host "   OK Proyecto comprimido: $archiveName" -ForegroundColor Green
Write-Host ""

# Mostrar tamaño del archivo
$fileSize = (Get-Item "$projectPath\$archiveName").Length / 1MB
Write-Host "   Tamaño: $([math]::Round($fileSize, 2)) MB" -ForegroundColor White
Write-Host ""

Write-Host "2. Para transferir al servidor, ejecuta:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Opcion A - Usando SCP:" -ForegroundColor Cyan
Write-Host "   scp '$projectPath\$archiveName' alumno@10.40.5.14:~/" -ForegroundColor White
Write-Host ""
Write-Host "   Opcion B - Usando WinSCP o FileZilla:" -ForegroundColor Cyan
Write-Host "   Host: 10.40.5.14" -ForegroundColor White
Write-Host "   Puerto: 22" -ForegroundColor White
Write-Host "   Usuario: alumno" -ForegroundColor White
Write-Host "   Password: Unab.2025" -ForegroundColor White
Write-Host ""

Write-Host "3. En el servidor SSH, ejecuta:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   mkdir -p ~/practica1-dashboard" -ForegroundColor White
Write-Host "   cd ~/practica1-dashboard" -ForegroundColor White
Write-Host "   unzip ~/practica1-dashboard.zip" -ForegroundColor White
Write-Host "   chmod +x deploy.sh" -ForegroundColor White
Write-Host "   ./deploy.sh" -ForegroundColor White
Write-Host ""

Write-Host "================================================" -ForegroundColor Green
Write-Host "  OK Archivo listo para transferir" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""

$transfer = Read-Host "Deseas transferir ahora usando SCP? (s/n)"

if ($transfer -eq "s" -or $transfer -eq "S") {
    Write-Host ""
    Write-Host "Transfiriendo archivo..." -ForegroundColor Yellow
    scp "$projectPath\$archiveName" alumno@10.40.5.14:~/
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "OK Transferencia completada!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Conecta al servidor SSH y ejecuta:" -ForegroundColor Yellow
        Write-Host "  ssh alumno@10.40.5.14" -ForegroundColor White
        Write-Host "  cd ~" -ForegroundColor White
        Write-Host "  unzip practica1-dashboard.zip -d practica1-dashboard" -ForegroundColor White
        Write-Host "  cd practica1-dashboard" -ForegroundColor White
        Write-Host "  chmod +x deploy.sh" -ForegroundColor White
        Write-Host "  ./deploy.sh" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "Error en la transferencia" -ForegroundColor Red
        Write-Host "Usa WinSCP o FileZilla como alternativa" -ForegroundColor Yellow
    }
}
