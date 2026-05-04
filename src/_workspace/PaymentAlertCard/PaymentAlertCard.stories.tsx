import type { Meta, StoryObj } from '@storybook/react';
import { PaymentAlertCard } from './PaymentAlertCard';
import type { PaymentAlertCardProps } from './PaymentAlertCard';

const meta: Meta<PaymentAlertCardProps> = {
  title: 'Feature UI/PaymentAlertCard',
  component: PaymentAlertCard,
  tags: ['autodocs'],
  argTypes: {
    nickname: { control: 'text' },
    amount: { control: 'number' },
    src: { control: 'text' },
  },
  args: {
    nickname: '김모또',
    amount: 10000,
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
        nickname="김모또"
        amount={10000}
        onReject={() => {}}
        onConfirm={() => {}}
      />
      <PaymentAlertCard
        nickname="김수한무거북이와두루미삼천갑자동방삭"
        amount={1000000}
        onReject={() => {}}
        onConfirm={() => {}}
      />
    </div>
  ),
};
