import { defineConfig  } from "vite";

// Para realizar el deploy en 'Netlify' se debe quitar esta configuración y luego realizar el comando 'npm run build' y subir la carpeta 'dist'

export default defineConfig({
    base: '/blackjack-vite/'
});