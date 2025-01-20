import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src'},
      { find: '@assets', replacement: '/src/assets'},
      { find: '@common', replacement: '/src/common'},
      { find: '@mocks', replacement: '/src/mocks'},
      { find: '@pages', replacement: '/src/pages'},
      { find: '@service', replacement: '/src/service'},
      { find: '@stores', replacement: '/src/stores'},
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
