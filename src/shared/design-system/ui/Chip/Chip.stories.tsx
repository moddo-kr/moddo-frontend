import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import type { ChipVariant, ChipSize } from './Chip';

const VARIANTS: ChipVariant[] = [
  'selected',
  'unselected',
  'disabled',
  'red',
  'black',
];
const SIZES: ChipSize[] = ['m', 's'];

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
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
type Story = StoryObj<typeof Chip>;

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
            <Chip key={variant} variant={variant} size={size} label="김모또" />
          ))}
        </div>
      ))}
    </div>
  ),
};
