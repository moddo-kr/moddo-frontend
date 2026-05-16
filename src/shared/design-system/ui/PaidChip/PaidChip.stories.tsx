import type { Meta, StoryObj } from '@storybook/react';
import { PaidChip } from './PaidChip';
import type { PaidChipStatus } from './PaidChip';

const STATUSES: PaidChipStatus[] = ['입금완료', '미입금', '확인중'];

const meta: Meta<typeof PaidChip> = {
  title: 'Components/PaidChip',
  component: PaidChip,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: STATUSES,
    },
  },
  args: {
    status: '입금완료',
  },
};

export default meta;
type Story = StoryObj<typeof PaidChip>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {STATUSES.map((status) => (
        <PaidChip key={status} status={status} />
      ))}
    </div>
  ),
};
