import type { Meta, StoryObj } from '@storybook/react';
import Profile from './index';

const meta: Meta<typeof Profile> = {
  title: 'ui/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
export default meta;
type Story = StoryObj<typeof Profile>;

export const SizeS: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'S',
    type: 'default',
  },
};

export const SizeM: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'm',
    type: 'default',
  },
};

export const SizeL: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'L',
    type: 'default',
  },
};

export const DeleteType: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'm',
    type: 'delete',
    onDelete: () => {
      alert('삭제 버튼 클릭됨');
    },
    onClick: () => {
      alert('프로필 클릭됨');
    },
  },
};

export const CheckedType: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'm',
    type: 'checked',
    onClick: () => {
      alert('프로필 클릭됨');
    },
  },
};

export const DisabledType: Story = {
  args: {
    id: 1,
    name: '모또',
    size: 'm',
    type: 'disabled',
  },
};
