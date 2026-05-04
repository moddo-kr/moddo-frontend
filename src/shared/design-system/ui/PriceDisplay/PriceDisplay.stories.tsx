import type { Meta, StoryObj } from '@storybook/react';
import { PriceDisplay } from './PriceDisplay';
import type { PriceDisplayProps } from './PriceDisplay';

const meta: Meta<PriceDisplayProps> = {
  title: 'Design System/PriceDisplay',
  component: PriceDisplay,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: '금액입력',
  },
};

export default meta;
type Story = StoryObj<PriceDisplayProps>;

export const Empty: Story = {};

export const WithValue: Story = {
  args: {
    value: '1,000,000',
  },
};
