import type { Meta, StoryObj } from '@storybook/react';
import { CurvedProgressBar } from './CurvedProgressBar';

const meta: Meta<typeof CurvedProgressBar> = {
  title: 'Feature Components/CurvedProgressBar',
  component: CurvedProgressBar,
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  args: {
    percentage: 0,
  },
};

export default meta;
type Story = StoryObj<typeof CurvedProgressBar>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}
    >
      {([0, 50, 100] as const).map((percentage) => (
        <div key={percentage}>
          <p style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            {percentage}%
          </p>
          <CurvedProgressBar percentage={percentage} />
        </div>
      ))}
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <CurvedProgressBar percentage={50}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 700 }}>50%</span>
        <span style={{ fontSize: 12, color: '#888' }}>정산 완료</span>
      </div>
    </CurvedProgressBar>
  ),
};
