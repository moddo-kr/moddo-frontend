import type { Meta, StoryObj } from '@storybook/react';
import MemberProfile from './index';

const meta: Meta<typeof MemberProfile> = {
  title: 'ui/MemberProfile',
  component: MemberProfile,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
export default meta;
type Story = StoryObj<typeof MemberProfile>;

export const ManagerProfile: Story = {
  args: {
    id: 1,
    name: '모또',
    canDelete: false,
    handleDeleteButtonClick: () => {
      alert('삭제 버튼 클릭됨');
    },
  },
};

export const ParticipantProfile: Story = {
  args: {
    id: 1,
    name: '모또',
    canDelete: true,
    handleDeleteButtonClick: () => {
      alert('삭제 버튼 클릭됨');
    },
  },
};
