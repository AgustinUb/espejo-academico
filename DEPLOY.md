# 🚀 Panel de Recursos - Grupo 8

Dashboard para gestión de recursos docentes con información de conexión SSH/VPN.

## 📋 Requisitos

- Node.js 18+ y npm
- Ubuntu 24.04 LTS (servidor)
- Conexión VPN (para acceso remoto)

## 🔧 Instalación en el Servidor

### 1. Transferir archivos al servidor

Desde tu máquina local:

```bash
# Comprimir el proyecto
cd "C:\Users\Aorus\Documents\PRactica1Final"
tar -czf practica1.tar.gz *

# Transferir al servidor vía SCP
scp -P 22 practica1.tar.gz alumno@10.40.5.14:~/

# O usar WinSCP / FileZilla
```

### 2. Conectar al servidor SSH

```bash
ssh alumno@10.40.5.14 -p 22
# Password: Unab.2025
```

### 3. Descomprimir y configurar

```bash
# Crear directorio del proyecto
mkdir -p ~/practica1-dashboard
cd ~/practica1-dashboard

# Descomprimir
tar -xzf ~/practica1.tar.gz

# Dar permisos de ejecución al script
chmod +x deploy.sh

# Ejecutar script de despliegue
./deploy.sh
```

## 🌐 Ejecutar la Aplicación

### Opción 1: Modo Desarrollo (puerto 3000)

```bash
npm run dev
```

Accede desde: `http://10.40.5.14:3000`

### Opción 2: Modo Producción (puerto 80)

```bash
sudo npm run serve
```

Accede desde: `http://10.40.5.14`

### Opción 3: Preview Build (puerto 4173)

```bash
npm run preview
```

Accede desde: `http://10.40.5.14:4173`

## 🔐 Datos de Conexión

### Servidor SSH - Grupo 8
- **IP:** 10.40.5.14
- **Puerto:** 22
- **Usuario:** alumno
- **Password:** Unab.2025

### VPN (desde casa)
- **Gateway:** 200.27.73.13
- **Usuario:** Usuario Intranet
- **Password:** Password de Intranet
- **Software:** FortiClient VPN
- **Download:** https://comunidadingenieria.cl/FortiClientVPNInstaller.exe

## 🛠️ Comandos Útiles

```bash
# Ver procesos Node.js corriendo
ps aux | grep node

# Matar proceso en puerto específico
sudo lsof -ti:80 | xargs kill -9

# Ver puertos en uso
sudo netstat -tulpn | grep LISTEN

# Logs del sistema
journalctl -f
```

## 📦 Estructura del Proyecto

```
practica1-dashboard/
├── src/
│   ├── components/
│   │   ├── ResourcesDashboard.tsx  # Dashboard principal
│   │   ├── SSHTerminal.tsx         # Terminal SSH interactivo
│   │   ├── CredentialsBox.tsx      # Credenciales n8n
│   │   └── ResourceCard.tsx        # Tarjetas de recursos
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── deploy.sh
```

## 🎯 Características

- ✅ Dashboard responsive con información de conexión
- ✅ Terminal SSH interactivo con instrucciones
- ✅ Información completa de VPN
- ✅ Credenciales de n8n con copiar/mostrar
- ✅ Tarjetas de recursos (Workflows, Sheets)
- ✅ Diseño moderno con Tailwind CSS v4

## 🔄 Actualizar la Aplicación

```bash
# Detener servidor actual (Ctrl+C)

# Actualizar código
git pull  # Si usas Git

# Reinstalar dependencias si cambiaron
npm install

# Reconstruir
npm run build

# Reiniciar servidor
sudo npm run serve
```

## 🐛 Troubleshooting

### El puerto 80 está en uso
```bash
sudo lsof -ti:80 | xargs kill -9
```

### Permisos denegados
```bash
sudo chown -R alumno:alumno ~/practica1-dashboard
```

### Node.js no instalado
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 📞 Soporte

**Grupo 8 - Práctica 1**
