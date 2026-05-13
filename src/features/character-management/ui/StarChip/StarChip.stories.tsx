import type { Meta, StoryObj } from '@storybook/react';
import { StarCount } from '@/entities/character/model/character.type';
import { StarChip } from './StarChip';

const COUNTS: StarCount[] = [1, 2, 3];

const meta: Meta<typeof StarChip> = {
  title: 'Feature UI/StarChip',
  component: StarChip,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'radio',
      options: COUNTS,
    },
  },
  args: {
    count: 1,
  },
};

export default meta;
type Story = StoryObj<typeof StarChip>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {COUNTS.map((count) => (
        <StarChip key={count} count={count} />
      ))}
    </div>
  ),
};
