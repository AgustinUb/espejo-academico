#!/bin/bash

echo "================================================"
echo "  Despliegue de Dashboard - Grupo 8"
echo "================================================"
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}1. Instalando Node.js y npm (si no están instalados)...${NC}"
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo -e "${GREEN}✓ Node.js ya está instalado${NC}"
fi

echo ""
echo -e "${YELLOW}2. Instalando dependencias del proyecto...${NC}"
npm install

echo ""
echo -e "${YELLOW}3. Construyendo la aplicación...${NC}"
npm run build

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  ✓ Aplicación construida exitosamente${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "${YELLOW}Para iniciar el servidor, ejecuta uno de estos comandos:${NC}"
echo ""
echo "  Opción 1 - Desarrollo (puerto 3000):"
echo "    npm run dev"
echo ""
echo "  Opción 2 - Producción (puerto 80, requiere sudo):"
echo "    sudo npm run serve"
echo ""
echo "  Opción 3 - Preview (puerto 4173):"
echo "    npm run preview"
echo ""
echo -e "${YELLOW}Accede desde:${NC}"
echo "  http://10.40.5.14"
echo ""
