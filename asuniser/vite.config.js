import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: './',
  server: {
    host: '0.0.0.0', // Listen on all IPs, not just localhost
    port: 5173, // Optional: Set a specific port
  },
};

