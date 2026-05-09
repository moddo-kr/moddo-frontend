import type { Meta, StoryObj } from '@storybook/react';
import { PaymentRequestCard } from './PaymentRequestCard';
import type { PaymentRequestCardProps } from './PaymentRequestCard';

const meta: Meta<PaymentRequestCardProps> = {
  title: 'Feature UI/PaymentRequestCard',
  component: PaymentRequestCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['미입금', '입금완료'],
    },
    description: {
      control: { type: 'text' },
    },
    amount: {
      control: { type: 'number' },
    },
  },
  args: {
    description: 'DND 7조 첫모임 김모또님에게',
    amount: 20000,
    status: '미입금',
  },
};

export default meta;
type Story = StoryObj<PaymentRequestCardProps>;

export const Default: Story = {};

export const Paid: Story = {
  args: {
    status: '입금완료',
  },
};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 350 }}
    >
      <PaymentRequestCard
        description="DND 7조 첫모임 김모또님에게"
        amount={20000}
        status="미입금"
      />
      <PaymentRequestCard
        description="DND 7조 첫모임 김모또님에게"
        amount={20000}
        status="입금완료"
      />
      <PaymentRequestCard
        description="이름도 길고 설명도 정말정말정말정말정말정말정말 길어요"
        amount={1000000}
        status="미입금"
      />
    </div>
  ),
};
