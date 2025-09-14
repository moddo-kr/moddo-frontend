import { Meta, StoryObj } from '@storybook/react';
import NumberInput from '.';

const SAMPLE_PLACEHOLDER = '금액 입력';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '21.875rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    placeholder: SAMPLE_PLACEHOLDER,
  },
};

export const Small: Story = {
  args: {
    placeholder: SAMPLE_PLACEHOLDER,
    variant: 'sm',
  },
};
