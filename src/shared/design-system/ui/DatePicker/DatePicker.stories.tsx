import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import type { DatePickerProps } from './DatePicker';

const meta: Meta<DatePickerProps> = {
  title: 'Design System/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    label: '날짜',
    required: true,
    placeholder: '날짜를 선택하세요',
  },
};

export default meta;
type Story = StoryObj<DatePickerProps>;

function DefaultStory(args: DatePickerProps) {
  const [selected, setSelected] = useState<Date | null>(null);
  return (
    <div style={{ width: 350, padding: 16 }}>
      <DatePicker {...args} selected={selected} onChange={setSelected} />
    </div>
  );
}

export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
};

function PreselectedStory(args: DatePickerProps) {
  const [selected, setSelected] = useState<Date | null>(new Date(2025, 0, 12));
  return (
    <div style={{ width: 350, padding: 16 }}>
      <DatePicker {...args} selected={selected} onChange={setSelected} />
    </div>
  );
}

export const WithPreselectedDate: Story = {
  render: (args) => <PreselectedStory {...args} />,
};
