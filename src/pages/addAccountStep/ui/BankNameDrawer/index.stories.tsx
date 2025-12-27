import { Meta, StoryObj } from '@storybook/react';
import BankNameDrawer from './index';

const meta: Meta<typeof BankNameDrawer> = {
  title: 'ui/BankNameDrawer',
  component: BankNameDrawer,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;
type Story = StoryObj<typeof BankNameDrawer>;

export const Default: Story = {
  args: {
    open: true,
  },
};
