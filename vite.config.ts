import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' = caminhos relativos: funciona em github.io/<repositorio>/, em domínio próprio e na raiz.
export default defineConfig({
  base: './',
  plugins: [react()],
})
