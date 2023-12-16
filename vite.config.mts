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
        find: '@apis',
        replacement: path.resolve(__dirname, 'src/apis')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@libraries',
        replacement: path.resolve(__dirname, 'src/libraries')
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, 'src/providers')
      },
      {
        find: '@schemas',
        replacement: path.resolve(__dirname, 'src/schemas')
      },
      {
        find: '@stores',
        replacement: path.resolve(__dirname, 'src/stores')
      },
      {
        find: '@typings',
        replacement: path.resolve(__dirname, 'src/typings')
      }
    ]
  },
  plugins: [react()]
});
