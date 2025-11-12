import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Base única para produção/DEV em raiz
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // AVISO (Windows): a porta 445 é usada pelo SMB e pode estar bloqueada/indisponível.
    // Se falhar, considere usar 8445 ou 444.
    host: true,
    port: 448,
    strictPort: true,
  },
}))
