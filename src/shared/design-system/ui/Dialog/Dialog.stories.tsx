import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    title: '정말로 진행할까요?',
    description: '이 작업은 되돌릴 수 없습니다.',
    mainAction: { label: '확인', onClick: () => {} },
    alternativeAction: { label: '취소', onClick: () => {} },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};

export const SingleAction: Story = {
  args: {
    alternativeAction: undefined,
  },
};

export const NoDescription: Story = {
  args: {
    description: undefined,
  },
};
