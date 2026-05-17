import type { Meta, StoryObj } from '@storybook/react';
import { getToken } from '@/shared/design-system';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
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

export const ReactNodeTitle: Story = {
  args: {
    title: (
      <>
        <span style={{ color: getToken('fg.primary.normal') }}>김모또</span>
        {'님의\n정산 입금을 알릴게요.'}
      </>
    ),
    description:
      '총무에게 입금 확인 요청 알림이 전송됩니다.\n입금을 완료했을 때만 눌러주세요.',
    mainAction: { label: '알림 보내기', onClick: () => {} },
    alternativeAction: { label: '취소', onClick: () => {} },
  },
};
