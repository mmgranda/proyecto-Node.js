# Procedimiento de despliegue y operación básica

## 1. Objetivo

Documentar los pasos necesarios para instalar, configurar, ejecutar, verificar y operar la aplicación Node.js construida durante la Semana 9.

## 2. Entorno de trabajo

- GitHub Codespaces
- Node.js
- npm
- Express
- dotenv
- PM2
- Git

## 3. Requisitos previos

Antes de iniciar, verificar:

- Tener acceso al repositorio.
- Abrir el proyecto en Codespaces.
- Estar ubicado en la carpeta `semana9-app-comunitaria`.
- Tener Node.js disponible.
- Tener el archivo `.env` creado localmente.
- No subir `.env` al repositorio.

## 4. Variables de entorno necesarias

Crear un archivo `.env` local con la siguiente estructura:

```env
PORT=3000
APP_NAME=App Comunitaria Semana 9
APP_ENV=development
REQUIRE_TELEGRAM=true
TELEGRAM_BOT_TOKEN=PEGAR_TOKEN_DE_PRACTICA_O_VARIABLE_LOCAL
