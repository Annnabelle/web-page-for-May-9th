import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // слушает на 0.0.0.0 для внешнего доступа
    port: 5173,  // внутренний порт в контейнере
    strictPort: true,
  },
});
