import type { Meta, StoryObj } from '@storybook/react';
import { Dimmed } from './Dimmed';

const meta: Meta<typeof Dimmed> = {
  title: 'Design System/Dimmed',
  component: Dimmed,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          height: '300px',
          background: '#fff',
          // transform으로 새 컨테이닝 블록 생성 → position: fixed가 이 div 기준으로 동작
          transform: 'translateZ(0)',
        }}
      >
        <p style={{ padding: '1rem', color: '#333' }}>배경 컨텐츠</p>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dimmed>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    onClick: () => {},
  },
};
