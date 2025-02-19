import { Meta, StoryObj } from '@storybook/react';
import CurvedProgressBar from '.';

const SAMPLE_PERCENTAGE = 30;
const SAMPLE_TEXT = '기본 텍스트';

const meta: Meta<typeof CurvedProgressBar> = {
  title: 'Component/CurvedProgressBar',
  component: CurvedProgressBar,
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: 'number',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    percentage: SAMPLE_PERCENTAGE,
    children: SAMPLE_TEXT,
  },
};

export default meta;

type Story = StoryObj<typeof CurvedProgressBar>;

export const Default: Story = {
  render: (args) => (
    <CurvedProgressBar {...args}>
      <div>
        `${args.children}: ${args.percentage}%`
      </div>
    </CurvedProgressBar>
  ),
};
