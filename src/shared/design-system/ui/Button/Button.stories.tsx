import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonVariant, ButtonSize } from './Button';

const VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'black',
  'red',
];
const SIZES: ButtonSize[] = ['medium', 'small', 'xsmall'];

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'label',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '3rem repeat(6, auto)',
  gap: 8,
  alignItems: 'center',
  justifyItems: 'start',
} as const;

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={gridStyle}>
        <span />
        {VARIANTS.map((variant) => (
          <span key={variant} style={{ fontSize: 12 }}>
            {variant}
          </span>
        ))}
        <span style={{ fontSize: 12 }}>disabled</span>
      </div>
      {SIZES.map((size) => (
        <div key={size} style={gridStyle}>
          <span style={{ fontSize: 12, fontWeight: 'bold' }}>{size}</span>
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant} size={size}>
              label
            </Button>
          ))}
          <Button variant="primary" size={size} disabled>
            label
          </Button>
        </div>
      ))}
    </div>
  ),
};
