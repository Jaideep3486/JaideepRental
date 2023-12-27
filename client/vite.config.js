import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: { // this code is to handle the cors error due to different domain . In prod they will have same origin , this is to handle redirection
      '/api': { // so each time we go to forward slash API, we're going to use localhost 3000
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
