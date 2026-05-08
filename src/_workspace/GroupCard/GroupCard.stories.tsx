import type { Meta, StoryObj } from '@storybook/react';
import { GroupCard } from './GroupCard';
import type { GroupCardProps } from './GroupCard';

const meta: Meta<GroupCardProps> = {
  title: 'Feature UI/GroupCard',
  component: GroupCard,
  tags: ['autodocs'],
  args: {
    groupName: '합정동 모각디',
    members: [
      { id: 1, name: '김모또', isHighlighted: true },
      { id: 2, name: '안맥북' },
      { id: 3, name: '박삼성' },
    ],
  },
};

export default meta;
type Story = StoryObj<GroupCardProps>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 350 }}
    >
      <GroupCard
        groupName="합정동 모각디"
        members={[
          { id: 1, name: '김모또', isHighlighted: true },
          { id: 2, name: '안맥북' },
          { id: 3, name: '박삼성' },
        ]}
      />
      <GroupCard
        groupName="멤버도 많고 이름도 정말정말정말정말 긴 모임 이름"
        members={[
          { id: 1, name: '김모또', isHighlighted: true },
          { id: 2, name: '안맥북' },
          { id: 3, name: '박삼성' },
          { id: 4, name: '이노트북' },
          { id: 5, name: '최아이맥' },
          { id: 6, name: '정갤럭시' },
        ]}
      />
      <GroupCard
        groupName="나 혼자 모임"
        members={[{ id: 1, name: '김모또', isHighlighted: true }]}
      />
    </div>
  ),
};
