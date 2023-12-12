import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@activities',
        replacement: path.resolve(__dirname, 'src/activities')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      }
    ]
  },
  plugins: [react()],
  server: {
    host: '192.168.0.37',
    port: 3000
  }
});
