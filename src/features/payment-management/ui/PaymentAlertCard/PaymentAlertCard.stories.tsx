import type { Meta, StoryObj } from '@storybook/react';
import { PaymentAlertCard } from './PaymentAlertCard';
import type { PaymentAlertCardProps } from './PaymentAlertCard';

const meta: Meta<PaymentAlertCardProps> = {
  title: 'Feature UI/PaymentAlertCard',
  component: PaymentAlertCard,
  tags: ['autodocs'],
  args: {
    payment: {
      paymentRequestId: 1,
      memberId: 1,
      name: '김모또',
      profileUrl: '',
      totalAmount: 10000,
      requestedAt: '2025-01-01T00:00:00',
    },
    onReject: () => console.log('rejected'),
    onConfirm: () => console.log('confirmed'),
  },
};

export default meta;
type Story = StoryObj<PaymentAlertCardProps>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}
    >
      <PaymentAlertCard
        payment={{
          paymentRequestId: 1,
          memberId: 1,
          name: '김모또',
          profileUrl: '',
          totalAmount: 10000,
          requestedAt: '2025-01-01T00:00:00',
        }}
        onReject={() => {}}
        onConfirm={() => {}}
      />
      <PaymentAlertCard
        payment={{
          paymentRequestId: 2,
          memberId: 2,
          name: '김수한무거북이와두루미삼천갑자동방삭',
          profileUrl: '',
          totalAmount: 1000000,
          requestedAt: '2025-01-01T00:00:00',
        }}
        onReject={() => {}}
        onConfirm={() => {}}
      />
    </div>
  ),
};
