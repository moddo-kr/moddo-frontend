import type { Meta, StoryObj } from '@storybook/react';
import { NameChip } from './NameChip';
import type { NameChipVariant, NameChipSize } from './NameChip';

const VARIANTS: NameChipVariant[] = [
  'selected',
  'unselected',
  'disabled',
  'red',
  'black',
];
const SIZES: NameChipSize[] = ['m', 's'];

const meta: Meta<typeof NameChip> = {
  title: 'Design System/NameChip',
  component: NameChip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS,
    },
    size: {
      control: 'radio',
      options: SIZES,
    },
    label: {
      control: 'text',
    },
  },
  args: {
    variant: 'selected',
    size: 'm',
    label: '김모또',
  },
};

export default meta;
type Story = StoryObj<typeof NameChip>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {SIZES.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        >
          <span style={{ width: 16, fontSize: 12 }}>{size}</span>
          {VARIANTS.map((variant) => (
            <NameChip
              key={variant}
              variant={variant}
              size={size}
              label="김모또"
            />
          ))}
        </div>
      ))}
    </div>
  ),
};
