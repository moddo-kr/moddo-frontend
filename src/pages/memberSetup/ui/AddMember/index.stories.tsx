import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Member } from '@/domains/group/model/member.type';
import AddMember from '.';

const queryClient = new QueryClient();

const MEMBERS: Member[] = [
  {
    id: 1,
    role: 'MANAGER',
    name: '김모또',
    profile: 'https://api.dicebear.com/9.x/glass/svg?seed=Felix',
    isPaid: true,
    paidAt: new Date('2025-07-15'),
  },
  {
    id: 2,
    role: 'PARTICIPANT',
    name: '날달걀',
    profile: 'https://api.dicebear.com/9.x/glass/svg?seed=Aneka',
    isPaid: false,
    paidAt: null,
  },
];

const DUMMY_GROUP_TOKEN = '12345-abcde-67890-fghij';

const meta: Meta<typeof AddMember> = {
  title: 'UI/AddMember',
  component: AddMember,
  tags: ['autodocs'],
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
