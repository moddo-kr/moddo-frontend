import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    message: { control: 'text' },
  },
  args: {
    type: 'success',
    message: '메시지를 입력해주세요',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const Success: Story = {
  args: { type: 'success' },
};

export const Info: Story = {
  args: { type: 'info' },
};

export const Warning: Story = {
  args: { type: 'warning' },
};

export const Error: Story = {
  name: 'Error',
  args: { type: 'error' },
};
