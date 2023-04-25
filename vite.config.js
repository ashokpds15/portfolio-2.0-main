import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/sendmail": {
        target: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
        rewrite: (path)  =>  path.replace("/api/sendmail", "")
      }
    }
  }
})
