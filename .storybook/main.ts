import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './**/*.mdx',
  ],
  addons: [
    'storybook-addon-pseudo-states',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  refs: {},
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      // 환경변수 설정 덮어씌우기
      define: {
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(''),
      },
    });
  },
};
export default config;
