import type { Meta, StoryObj } from '@storybook/react';
import MemberProfile from './index';

const meta: Meta<typeof MemberProfile> = {
  title: 'ui/MemberProfile',
  component: MemberProfile,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
export default meta;
type Story = StoryObj<typeof MemberProfile>;

export const ManagerProfile: Story = {
  args: {
    member: {
      id: 1,
      name: '모또',
      profile: '',
      role: 'MANAGER',
      isPaid: false,
      paidAt: null,
    },
  },
};

export const ParticipantProfile: Story = {
  args: {
    member: {
      id: 1,
      name: '모또',
      profile: '',
      role: 'PARTICIPANT',
      isPaid: false,
      paidAt: null,
    },
  },
};
