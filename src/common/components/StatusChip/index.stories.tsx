import { Meta, StoryObj } from '@storybook/react';
import { paymentStatus } from './index.type';
import StatusChip from '.';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: paymentStatus,
    },
  },
  args: {
    status: 'paid',
  },
};

export default meta;

type Story = StoryObj<typeof StatusChip>;

export const Default: Story = {};

export const Showcase = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <StatusChip status="paid" />
    <StatusChip status="unpaid" />
  </div>
);
