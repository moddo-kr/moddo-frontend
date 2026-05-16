import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps, InputState, InputVariant } from './Input';

const STATES: InputState[] = ['default', 'error', 'disabled'];
const VARIANTS: InputVariant[] = ['default', 'price'];

const meta: Meta<InputProps> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'radio', options: STATES },
    variant: { control: 'radio', options: VARIANTS },
    label: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    label: '모임 이름',
    required: true,
    placeholder: '모임 이름을 입력하세요',
    state: 'default',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 350 }}
    >
      {STATES.map((state) => (
        <Input
          key={state}
          label={state}
          required
          placeholder="placeholder"
          state={state}
        />
      ))}
      <Input
        label="filled"
        required
        value="모임 이름 입력 완료"
        placeholder="placeholder"
        readOnly
      />
    </div>
  ),
};

export const PriceVariant: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 310 }}
    >
      <Input label="금액" required placeholder="금액입력" variant="price" />
      <Input
        label="금액"
        required
        placeholder="금액입력"
        variant="price"
        value="1,000,000"
        readOnly
      />
    </div>
  ),
};
