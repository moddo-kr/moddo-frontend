import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from '../src/shared/styles/globalStyles';
import '../src/shared/design-system/tokens/build/token.css';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    chromatic: { disableSnapshot: true }, // 기본적으로 Chromatic 스냅샷 비활성화 (필요한 스토리에서만 활성화한다)
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      defaultTheme: 'light',
      GlobalStyles,
    }),
  ],

  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
