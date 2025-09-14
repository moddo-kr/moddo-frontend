import { Meta, StoryObj } from '@storybook/react';
import StarChip from '.';

const meta: Meta<typeof StarChip> = {
  title: 'Components/StarChip',
  component: StarChip,
  tags: ['autodocs'],
  argTypes: {
    star: {
      control: 'radio',
      options: [1, 2, 3],
    },
  },
  args: {
    star: 1,
  },
};

export default meta;

type Story = StoryObj<typeof StarChip>;

export const Default: Story = {
  args: {
    star: 1,
  },
};

export const Showcase = () => (
  <div
    style={{
      display: 'flex',
      gap: '1.5rem',
      flexDirection: 'column',
      width: 'fit-content',
    }}
  >
    <StarChip star={1} />
    <StarChip star={2} />
    <StarChip star={3} />
  </div>
);
