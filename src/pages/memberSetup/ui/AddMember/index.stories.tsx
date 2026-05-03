import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Member } from '@/entities/member/model/member.type';
import AddMember from '.';

const queryClient = new QueryClient();

const MEMBERS: Member[] = [
  {
    id: 1,
    role: 'MANAGER',
    name: '김모또',
    profile: 'https://api.dicebear.com/9.x/glass/svg?seed=Felix',
    userId: 1,
    isPaid: true,
    paidAt: '2025-07-15T00:00:00',
  },
  {
    id: 2,
    role: 'PARTICIPANT',
    name: '날달걀',
    profile: 'https://api.dicebear.com/9.x/glass/svg?seed=Aneka',
    userId: 2,
    isPaid: false,
    paidAt: null,
  },
];

const DUMMY_GROUP_TOKEN = '12345-abcde-67890-fghij';

const meta: Meta<typeof AddMember> = {
  title: 'UI/AddMember',
  component: AddMember,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AddMember>;

export const Default: Story = {
  args: {
    groupToken: DUMMY_GROUP_TOKEN,
    members: MEMBERS,
  },
};
