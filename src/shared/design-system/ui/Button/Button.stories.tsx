import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonVariant, ButtonSize } from './Button';

const VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'black'];
const SIZES: ButtonSize[] = ['medium', 'small', 'xsmall'];

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
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

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3rem repeat(5, auto)',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <span />
        {VARIANTS.map((variant) => (
          <span key={variant} style={{ fontSize: 12, textAlign: 'center' }}>
            {variant}
          </span>
        ))}
        <span style={{ fontSize: 12, textAlign: 'center' }}>disabled</span>
      </div>
      {SIZES.map((size) => (
        <div
          key={size}
          style={{
            display: 'grid',
            gridTemplateColumns: '3rem repeat(5, auto)',
            gap: 8,
            alignItems: 'center',
          }}
        >
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

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          label
        </Button>
      ))}
    </div>
  ),
};
