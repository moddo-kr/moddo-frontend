import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DatePicker from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '21.875rem',
          height: '26rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    selected: {
      control: 'date',
    },
    onChange: {
      action: 'changed',
    },
    open: {
      control: 'boolean',
    },
  },
  args: {
    selected: new Date(),
    open: true,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    selected: new Date(),
  },
};

export const SelectDate = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <DatePicker selected={selected} onChange={(date) => setSelected(date)} />
  );
};
