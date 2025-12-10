# Panel de Recursos para Docentes - Espejo Académico

Dashboard web para gestionar recursos de n8n y evaluaciones de estudiantes.

## 🚀 Características

- **Credenciales n8n**: Visualización y copia rápida de credenciales
- **Recursos descargables**: Workflow JSON y configuración Docker de n8n
- **Conexión SSH/VPN**: Información de acceso al servidor
- **Google Sheets**: Enlaces directos a preguntas y resultados
- **Terminal SSH**: Interfaz visual para conexión al servidor

## 📋 Requisitos Previos

- Node.js v20 o superior
- npm v10 o superior
- Git

## 🔧 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/AgustinUb/espejo-academico.git
cd espejo-academico
git checkout Web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en:
- Local: `http://localhost:5173/`
- Red: Verás las IPs de red en la terminal

## 🏗️ Construcción para Producción

```bash
# Construir aplicación
npm run build

# Los archivos compilados estarán en la carpeta 'build/'
```

## 🌐 Despliegue en Servidor Ubuntu (10.40.5.14)

### Paso 1: Preparar archivos localmente (Windows PowerShell)

```powershell
# Construir la aplicación
cd c:\Users\Aorus\Documents\PRactica1Final
npm run build

# Transferir archivos al servidor
scp -r build/* alumno@10.40.5.14:~/webapp/
```

### Paso 2: Configurar servidor (SSH en Ubuntu)

```bash
# Conectar al servidor
ssh alumno@10.40.5.14
# Password: Unab.2025

# Instalar nginx
sudo apt update
sudo apt install nginx -y

# Crear directorio para la aplicación
mkdir -p ~/webapp
cd ~/webapp

# Iniciar y habilitar nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Configurar firewall
sudo ufw allow 80/tcp
sudo ufw allow 'Nginx HTTP'

# Copiar archivos compilados a nginx
sudo cp -r ~/webapp/* /var/www/html/

# Dar permisos correctos
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Reiniciar nginx
sudo systemctl restart nginx
```

### Paso 3: Verificar despliegue

Acceder desde el navegador a: **http://10.40.5.14/**

## 🔐 Información de Conexión

### Servidor SSH
- **IP**: 10.40.5.14
- **Puerto**: 22
- **Usuario**: alumno
- **Contraseña**: Unab.2025

### VPN FortiClient
- **Gateway**: 200.27.73.13
- **Usuario**: [Tu usuario de Intranet]
- **Contraseña**: [Tu contraseña de Intranet]

### Credenciales n8n
- **URL**: http://10.40.5.14:5678
- **Email**: practica1@gmail.com
- **Contraseña**: Qwerty123

## 📁 Estructura del Proyecto

```
PRactica1Final/
├── src/
│   ├── components/
│   │   ├── ResourcesDashboard.tsx    # Dashboard principal
│   │   ├── ResourceCard.tsx          # Tarjetas de recursos
│   │   ├── CredentialsBox.tsx        # Caja de credenciales n8n
│   │   └── SSHTerminal.tsx           # Terminal SSH
│   ├── App.tsx                        # Componente raíz
│   └── main.tsx                       # Punto de entrada
├── public/
│   ├── workflow-n8n.json             # Archivo de workflow
│   └── n8n-docker-setup.zip          # Configuración Docker
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Tecnologías

- **React 18.3.1**: Framework UI
- **TypeScript**: Tipado estático
- **Vite 6.3.5**: Build tool y dev server
- **Tailwind CSS v4**: Estilos
- **Radix UI**: Componentes accesibles
- **xterm.js**: Emulador de terminal
- **Lucide React**: Iconos

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
```

## 🔄 Actualizar Aplicación en Servidor

```bash
# 1. En Windows: construir nueva versión
npm run build
scp -r build/* alumno@10.40.5.14:~/webapp/

# 2. En servidor: actualizar archivos
ssh alumno@10.40.5.14
sudo cp -r ~/webapp/* /var/www/html/
sudo systemctl restart nginx
```

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Verificar estado de nginx
sudo systemctl status nginx

# Ver logs de error
sudo tail -f /var/log/nginx/error.log
```

### Archivos no se actualizan
```bash
# Limpiar caché del navegador o forzar recarga (Ctrl + F5)

# Verificar permisos
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### Puerto 80 bloqueado
```bash
# Verificar firewall
sudo ufw status

# Permitir puerto 80
sudo ufw allow 80/tcp
```

## 📦 Recursos Incluidos

1. **Workflow n8n**: Archivo JSON para importar en n8n
2. **Configuración Docker**: Setup completo de n8n en Docker
3. **Google Sheets**: 
   - Preguntas: https://docs.google.com/spreadsheets/d/1oMjIYlrSItTyJGzUoRdtafkHNFPPqFk2yuCnl5qAhvM/
   - Resultados: (mismo enlace)

## 👥 Soporte

Para problemas o preguntas, contactar al administrador del sistema.

## 📄 Licencia

Este proyecto es de uso interno para la Universidad Andrés Bello.
