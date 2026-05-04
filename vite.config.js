import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/EducTourBlog/', // Keep your GitHub Pages base path!
  plugins: [
    tailwindcss(),
  ],
})