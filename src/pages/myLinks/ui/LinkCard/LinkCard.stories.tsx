import type { Meta, StoryObj } from '@storybook/react';
import { LinkCard } from './LinkCard';
import type { LinkCardProps } from './LinkCard';

const meta: Meta<LinkCardProps> = {
  title: 'Feature Components/LinkCard',
  component: LinkCard,
  tags: ['autodocs'],
  args: {
    name: '합정동 모각디',
    url: 'here.is.link.as.well',
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
      <LinkCard name="합정동 모각디" url="here.is.link.as.well" />
      <LinkCard
        name="이름도 길고 링크도 정말정말정말정말정말정말 길어요"
        url="https://www.very-long-settlement-link.com/path/to/resource?id=12345678"
      />
    </div>
  ),
};
