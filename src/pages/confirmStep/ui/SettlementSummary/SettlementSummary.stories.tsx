import type { Meta, StoryObj } from '@storybook/react';
import { SettlementSummary } from './SettlementSummary';
import type { SettlementSummaryProps } from './SettlementSummary';

const mockMembers = [
  {
    id: 1,
    role: 'MANAGER' as const,
    name: '김모또',
    amount: 20000,
    profile: '',
  },
  {
    id: 2,
    role: 'PARTICIPANT' as const,
    name: '박또또',
    amount: 20000,
    profile: '',
  },
  {
    id: 3,
    role: 'PARTICIPANT' as const,
    name: '이모또',
    amount: 20000,
    profile: '',
  },
  {
    id: 4,
    role: 'PARTICIPANT' as const,
    name: '최또또',
    amount: 20000,
    profile: '',
  },
  {
    id: 5,
    role: 'PARTICIPANT' as const,
    name: '정모또',
    amount: 20000,
    profile: '',
  },
  {
    id: 6,
    role: 'PARTICIPANT' as const,
    name: '한또또',
    amount: 20000,
    profile: '',
  },
];

const meta: Meta<SettlementSummaryProps> = {
  title: 'Feature UI/SettlementSummary',
  component: SettlementSummary,
  tags: ['autodocs'],
  args: {
    id: 1,
    index: 0,
    content: '투썸플레이스',
    amount: 120000,
    date: '2025-01-14',
    memberExpenses: mockMembers,
    onEdit: (context) => console.log('edit clicked', context),
  },
};

export default meta;
type Story = StoryObj<SettlementSummaryProps>;

export const Default: Story = {};

export const WithDelete: Story = {
  args: {
    index: 1,
    onDelete: () => console.log('delete clicked'),
  },
};

export const FewMembers: Story = {
  args: {
    memberExpenses: mockMembers.slice(0, 2),
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 350 }}
    >
      <SettlementSummary
        id={1}
        index={0}
        content="투썸플레이스"
        amount={120000}
        date="2025-01-14"
        memberExpenses={mockMembers}
        onEdit={() => {}}
      />
      <SettlementSummary
        id={2}
        index={1}
        content="스타벅스"
        amount={54000}
        date="2025-01-14"
        memberExpenses={mockMembers.slice(0, 2)}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  ),
};
