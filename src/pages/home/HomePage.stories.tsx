import { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import HomePage from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => {
      const mockRouter = createMemoryRouter([
        {
          path: '/*',
          element: <Story />,
        },
      ]);
      return <RouterProvider router={mockRouter} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
