import { Meta, StoryObj } from '@storybook/react';
import DefaultProgressBar from '.';

const SAMPLE_PERCENTAGE = 30;

const meta: Meta<typeof DefaultProgressBar> = {
  title: 'Components/DefaultProgressBar',
  component: DefaultProgressBar,
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: 'number',
    },
  },
  args: {
    percentage: SAMPLE_PERCENTAGE,
  },
};

export default meta;

type Story = StoryObj<typeof DefaultProgressBar>;

export const Default: Story = {
  args: {
    percentage: SAMPLE_PERCENTAGE,
  },
};
