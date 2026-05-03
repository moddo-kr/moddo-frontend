import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import type { AlertState, AlertVariant } from './Alert';

const STATES: AlertState[] = ['info', 'success', 'warning', 'danger'];
const VARIANTS: AlertVariant[] = ['colored', 'white'];

const meta: Meta<typeof Alert> = {
  title: 'Design System/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'radio', options: STATES },
    variant: { control: 'radio', options: VARIANTS },
    message: { control: 'text' },
  },
  args: {
    state: 'info',
    variant: 'colored',
    message: '박또또님에게 남은 3,000원이 부과됐어요.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 310 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {VARIANTS.map((variant) => (
        <div
          key={variant}
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          {STATES.map((state) => (
            <Alert
              key={state}
              state={state}
              variant={variant}
              message="박또또님에게 남은 3,000원이 부과됐어요."
            />
          ))}
        </div>
      ))}
    </div>
  ),
};
