#!/bin/bash

# Caminho da pasta de build - ajuste se for outro nome
BUILD_DIR=dist

# Caminho do destino no servidor (via FTP/SSH/etc)
# Exemplo local: /public_html/vendas
DEST_DIR=/public_html/vendas

# Passo 1: Build do projeto
npm run build

# Passo 2: Envia para o servidor (você pode adaptar para FTP, SCP, etc)
# Exemplo usando SCP para um servidor remoto:
# scp -r $BUILD_DIR/* usuario@seuservidor:$DEST_DIR

# Se usar FTP, adapte conforme sua ferramenta

# Passo 3: Ajusta permissões após envio (exemplo para servidor Linux)
ssh usuario@seuservidor << EOF
  find $DEST_DIR -type d -exec chmod 755 {} \;
  find $DEST_DIR -type f -exec chmod 644 {} \;
  # Configura arquivo .htaccess com permissão correta
  chmod 644 $DEST_DIR/.htaccess
EOF

echo "Deploy finalizado com permissões ajustadas!"
