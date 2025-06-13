import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react(),
    tailwindcss(),
  ],
  define: {
    'import.meta.env.VITE_MAP_ID': JSON.stringify(env.VITE_MAP_ID),
    'import.meta.env.VITE_MAP_API_KEY': JSON.stringify(env.VITE_MAP_API_KEY)
  }
}
})
