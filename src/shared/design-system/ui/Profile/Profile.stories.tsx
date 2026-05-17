import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';
import type { ProfileSize, ProfileType } from './Profile';

const SIZES: ProfileSize[] = ['s', 'm', 'L'];
const TYPES: ProfileType[] = ['default', 'delete', 'checked', 'disabled'];

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: SIZES },
    type: { control: 'radio', options: TYPES },
    label: { control: 'text' },
    src: { control: 'text' },
  },
  args: {
    size: 'm',
    type: 'default',
    label: '김모또',
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {TYPES.map((type) => (
        <div
          key={type}
          style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
        >
          {SIZES.map((size) => (
            <Profile key={size} size={size} type={type} label="김모또" />
          ))}
        </div>
      ))}
    </div>
  ),
};
