# Clase 43 - Continuidad operativa, diagnóstico y resolución de errores

## Objetivo
Ejecutar acciones básicas de continuidad operativa usando PM2, simular fallos controlados y diagnosticar errores mediante logs.

## Comandos PM2 usados

```bash
npx pm2 start server.js --name app-semana9
npx pm2 list
npx pm2 stop app-semana9
npx pm2 restart app-semana9
npx pm2 logs app-semana9 --lines 20
npx pm2 delete app-semana9
