import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';
import type { SelectProps } from './Select';

const defaultOptions = [
  { label: '최신순', value: 'latest' },
  { label: '오래된순', value: 'oldest' },
  { label: '이름순', value: 'name' },
];

const meta: Meta<SelectProps> = {
  title: 'Design System/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: defaultOptions,
    value: 'latest',
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {};

function ShowcaseSelect() {
  const [value, setValue] = useState('latest');
  return (
    <div
      style={{
        width: 350,
        height: 200,
      }}
    >
      <Select options={defaultOptions} value={value} onChange={setValue} />
    </div>
  );
}

export const Showcase: Story = {
  render: () => <ShowcaseSelect />,
};
