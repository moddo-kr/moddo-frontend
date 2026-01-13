import { Meta, StoryObj } from '@storybook/react';
import LoginEntranceView from './LoginEntranceView';

const meta: Meta<typeof LoginEntranceView> = {
  title: 'pages/LoginEntranceView',
  component: LoginEntranceView,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;
type Story = StoryObj<typeof LoginEntranceView>;

export const Default: Story = {};
