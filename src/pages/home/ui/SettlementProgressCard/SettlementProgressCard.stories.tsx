import type { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { SettlementProgressCard } from './SettlementProgressCard';
import type { SettlementProgressCardProps } from './SettlementProgressCard';

const meta: Meta<SettlementProgressCardProps> = {
  title: 'Feature UI/SettlementProgressCard',
  component: SettlementProgressCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      // createMemoryRouter : 주로 테스트 환경에서 사용되는 라우터 생성 함수
      const mockRouter = createMemoryRouter([
        {
          path: '/*',
          element: <Story />,
        },
      ]);

      return <RouterProvider router={mockRouter} />;
    },
  ],
  args: {
    groupCode: 'ABC123',
    groupName: 'DND 7조 첫모임',
    totalAmount: 120000,
    paidMember: 3,
    totalMember: 6,
  },
};

export default meta;
type Story = StoryObj<SettlementProgressCardProps>;

export const Default: Story = {};

export const AllPaid: Story = {
  args: {
    paidMember: 6,
    totalMember: 6,
  },
};

export const NoPaid: Story = {
  args: {
    paidMember: 0,
    totalMember: 6,
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 350 }}
    >
      <SettlementProgressCard
        groupCode="ABC123"
        groupName="DND 7조 첫모임"
        totalAmount={120000}
        paidMember={0}
        totalMember={6}
      />
      <SettlementProgressCard
        groupCode="ABC123"
        groupName="DND 7조 첫모임"
        totalAmount={120000}
        paidMember={3}
        totalMember={6}
      />
      <SettlementProgressCard
        groupCode="ABC123"
        groupName="DND 7조 첫모임"
        totalAmount={120000}
        paidMember={6}
        totalMember={6}
      />
    </div>
  ),
};
