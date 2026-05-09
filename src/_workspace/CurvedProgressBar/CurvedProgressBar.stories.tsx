import type { Meta, StoryObj } from '@storybook/react';
import { CurvedProgressBar } from './CurvedProgressBar';

const meta: Meta<typeof CurvedProgressBar> = {
  title: 'Feature UI/CurvedProgressBar',
  component: CurvedProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  args: {
    progress: 0,
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
      {([0, 50, 100] as const).map((progress) => (
        <div key={progress}>
          <p style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            {progress}%
          </p>
          <CurvedProgressBar progress={progress} />
        </div>
      ))}
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <CurvedProgressBar progress={50}>
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
