import type { Meta, StoryObj } from '@storybook/react';
import ProfileImage from './index';

const meta: Meta<typeof ProfileImage> = {
  title: 'components/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Size36: Story = {
  args: {
    src: '',
    size: '36',
  },
};

export const Size40: Story = {
  args: {
    src: '',
    size: '40',
  },
};

export const Size48: Story = {
  args: {
    src: '',
    size: '48',
  },
};

export const Size68: Story = {
  args: {
    src: '',
    size: '68',
  },
};
