import type { Meta, StoryObj } from '@storybook/react';
import MemberProfileImage from './index';

const meta: Meta<typeof MemberProfileImage> = {
  title: 'components/MemberProfileImage',
  component: MemberProfileImage,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;
type Story = StoryObj<typeof MemberProfileImage>;

export const SmallProfileImage: Story = {
  args: {
    src: '',
    size: 'sm',
  },
};

export const MediumProfileImage: Story = {
  args: {
    src: '',
    size: 'md',
  },
};

export const LargeProfileImage: Story = {
  args: {
    src: '',
    size: 'lg',
  },
};
