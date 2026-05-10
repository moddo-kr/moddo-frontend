import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Design System/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: <ArrowLeft width={24} height={24} />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton aria-label="뒤로가기">
        <ArrowLeft width={24} height={24} />
      </IconButton>
      <IconButton disabled aria-label="뒤로가기">
        <ArrowLeft width={24} height={24} />
      </IconButton>
    </div>
  ),
};
