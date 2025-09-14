import { useState } from 'react';
import { Meta } from '@storybook/react';
import NumPad from '.';

const meta: Meta<typeof NumPad> = {
  title: 'Components/NumPad',
  component: NumPad,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '24.375rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    input: {
      control: 'number',
    },
  },
  args: {
    input: 0,
  },
};

export default meta;

// type Story = StoryObj<typeof NumPad>;

export const Default = () => {
  const [input, setInput] = useState<number>(0);

  return <NumPad input={input} setInput={setInput} onClose={() => {}} />;
};
