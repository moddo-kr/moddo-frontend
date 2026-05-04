import type { Meta, StoryObj } from '@storybook/react';
import { SettlementProgressCard } from './SettlementProgressCard';
import type { SettlementProgressCardProps } from './SettlementProgressCard';

const meta: Meta<SettlementProgressCardProps> = {
  title: 'Feature UI/SettlementProgressCard',
  component: SettlementProgressCard,
  tags: ['autodocs'],
  args: {
    groupName: 'DND 7조 첫모임',
    amount: 120000,
    paidCount: 3,
    totalCount: 6,
  },
};

export default meta;
type Story = StoryObj<SettlementProgressCardProps>;

export const Default: Story = {};

export const AllPaid: Story = {
  args: {
    paidCount: 6,
    totalCount: 6,
  },
};

export const NoPaid: Story = {
  args: {
    paidCount: 0,
    totalCount: 6,
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 350 }}
    >
      <SettlementProgressCard
        groupName="DND 7조 첫모임"
        amount={120000}
        paidCount={0}
        totalCount={6}
      />
      <SettlementProgressCard
        groupName="DND 7조 첫모임"
        amount={120000}
        paidCount={3}
        totalCount={6}
      />
      <SettlementProgressCard
        groupName="DND 7조 첫모임"
        amount={120000}
        paidCount={6}
        totalCount={6}
      />
    </div>
  ),
};
