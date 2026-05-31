import type { Meta, StoryObj } from '@storybook/react';
import { ProfileImage } from './ProfileImage';
import type { ProfileImageSize } from './ProfileImage';

const SIZES: ProfileImageSize[] = ['36', '40', '48', '68'];

const meta: Meta<typeof ProfileImage> = {
  title: 'Components/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: SIZES },
    src: { control: 'text' },
  },
  args: {
    size: '48',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
      {SIZES.map((size) => (
        <ProfileImage key={size} size={size} />
      ))}
    </div>
  ),
};
