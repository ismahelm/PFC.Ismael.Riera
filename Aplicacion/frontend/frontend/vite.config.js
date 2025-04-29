import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; // 👈 Asegurate de importar path
import { fileURLToPath } from 'url';

// Solución para `__dirname` en módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
