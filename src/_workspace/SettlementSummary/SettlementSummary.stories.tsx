import type { Meta, StoryObj } from '@storybook/react';
import { SettlementSummary } from './SettlementSummary';
import type { SettlementSummaryProps } from './SettlementSummary';

const meta: Meta<SettlementSummaryProps> = {
  title: 'Feature UI/SettlementSummary',
  component: SettlementSummary,
  tags: ['autodocs'],
  args: {
    title: '1차',
    placeName: '투썸플레이스',
    amount: 120000,
    members: [
      { name: '김모또(총무)', isHighlighted: true },
      { name: '박또또' },
      { name: '이모또' },
      { name: '최또또' },
      { name: '정모또' },
      { name: '한또또' },
    ],
    onEdit: () => console.log('edit clicked'),
  },
};

export default meta;
type Story = StoryObj<SettlementSummaryProps>;

export const Default: Story = {};

export const FewMembers: Story = {
  args: {
    members: [
      { name: '김모또(총무)', isHighlighted: true },
      { name: '박또또' },
    ],
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 350 }}
    >
      <SettlementSummary
        title="1차"
        placeName="투썸플레이스"
        amount={120000}
        members={[
          { name: '김모또(총무)', isHighlighted: true },
          { name: '박또또' },
          { name: '이모또' },
          { name: '최또또' },
          { name: '정모또' },
          { name: '한또또' },
        ]}
        onEdit={() => {}}
      />
      <SettlementSummary
        title="2차"
        placeName="스타벅스"
        amount={54000}
        members={[
          { name: '김모또(총무)', isHighlighted: true },
          { name: '박또또' },
        ]}
        onEdit={() => {}}
      />
    </div>
  ),
};
