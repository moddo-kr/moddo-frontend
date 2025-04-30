import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Storybook 빌드인지 확인
  const isStorybook = process.env.STORYBOOK === 'true';

  return {
    optimizeDeps: {
      include: ['react-toastify'], // react-toastify를 의존성에 포함시켜 번들링을 보장
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      // Storybook 빌드가 아닐 때만 VitePWA 플러그인 적용
      !isStorybook &&
        VitePWA({
          registerType: 'autoUpdate',
          strategies: 'generateSW',
          includeAssets: [
            '/pwa/favicon.ico',
            '/pwa/apple-touch-icon.png',
            '/pwa/mask-icon.svg',
          ],
          /** @Todo 서비스의 기획 및 디자인에 따라 manifest 설정 바꾸기 */
          manifest: {
            name: '모또(MODDO)',
            short_name: '모또',
            description: '즐거운 만남, 정산까지 즐겁게! 모또',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone', // 독립형 앱처럼 실행
            lang: 'ko',
            icons: [
              {
                src: '/pwa/pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png',
              },
              {
                src: '/pwa/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
              },
              {
                src: '/pwa/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: '/pwa/maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },
          devOptions: {
            enabled: true, // 개발 모드에서 PWA 활성화
            type: 'module', // Service Worker 파일 타입
          },
          /** 최신 상태가 바로 반영되도록 service worker 캐시 설정 변경 */
          workbox: {
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB로 설정 (기본값은 2MB)
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
              {
                urlPattern: /\.(?:js|css|png|jpg|jpeg|svg)$/,
                handler: 'NetworkFirst', // 네트워크를 먼저 시도
                options: {
                  cacheName: 'static-assets',
                  expiration: {
                    maxEntries: 60, // 최대 캐시 항목 수
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30일
                  },
                },
              },
              /** 사이트맵이 서비스워커에 캐시되지 않도록 설정 */
              {
                urlPattern: /^https:\/\/www\.moddo\.kr\/sitemap\.xml$/,
                handler: 'NetworkOnly', // 캐시하지 않고 항상 네트워크 요청
                options: {
                  cacheName: 'sitemap-no-cache',
                },
              },
            ],
          },
        }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };
});
