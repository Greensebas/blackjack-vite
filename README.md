# Blackjack

## PRUÉBALO
* https://greensebas.github.io/blackjack-vite/

----

* Se utiliza la librería "underscore" para ciertas funciones

* Para ejecutar la app como desarrollador ingresar en consola 'npm run dev' e ingresar al link localhost

* Para modificar la carpeta 'dist' para producción, ejecutar en consola 'npm run build' y luego hacer el deploy

## PASOS PARA EJECUTAR EL PROYECTO
1. Clonar repositorio
2. Ejecutar ```npm install``` para reconstruir los módulos de node
3. Correr el devServer ```npm run dev```
4. Abrir el proyecto en el: ```http://localhost:5173```

## PRODUCCIÓN EN NETLIFY
1. Revisar el archivo ```vite.config.js``` y comentar (//) la configuración ```base```
2. Ejecutar ```npm run build```
3. Tomar la carpeta ```dist``` y desplegarla en la configuración ```Deploys``` de Netlify (Drag and drop)

## PRODUCCIÓN EN GITHUB PAGES
1. Revisar el archivo ```vite.config.js``` y descomentar (//) la configuración ```base```
2. Ejecutar ```npm run build```
3. Tomar la carpeta ```dist``` y renombrarla como ```docs```
4. Hacer el push al repositorio
5. Aguardar la actualización del sitio