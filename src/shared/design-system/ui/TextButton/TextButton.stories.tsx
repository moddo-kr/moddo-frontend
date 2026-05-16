import type { Meta, StoryObj } from '@storybook/react';
import { TextButton } from './TextButton';
import type { TextButtonSize } from './TextButton';

const SIZES: TextButtonSize[] = ['medium', 'small'];

const meta: Meta<typeof TextButton> = {
  title: 'Design System/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: SIZES,
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    size: 'medium',
    children: '버튼',
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {SIZES.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        >
          <span style={{ width: 48, fontSize: 12 }}>{size}</span>
          <TextButton size={size}>버튼</TextButton>
          <TextButton size={size} disabled>
            버튼
          </TextButton>
        </div>
      ))}
    </div>
  ),
};
