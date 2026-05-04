import type { Meta, StoryObj } from '@storybook/react';
import { LinkCard } from './LinkCard';
import type { LinkCardProps } from './LinkCard';

const meta: Meta<LinkCardProps> = {
  title: 'Feature UI/LinkCard',
  component: LinkCard,
  tags: ['autodocs'],
  args: {
    label: '합정동 모각디',
    link: 'here.is.link.as.well',
    onCopy: () => console.log('copied'),
  },
};

export default meta;
type Story = StoryObj<LinkCardProps>;

export const Default: Story = {};

export const Showcase: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 350 }}
    >
      <LinkCard
        label="합정동 모각디"
        link="here.is.link.as.well"
        onCopy={() => {}}
      />
      <LinkCard
        label="이름도 길고 링크도 정말정말정말정말정말정말 길어요"
        link="https://www.very-long-settlement-link.com/path/to/resource?id=12345678"
        onCopy={() => {}}
      />
    </div>
  ),
};
