import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionField } from './DescriptionField';

const meta: Meta<typeof DescriptionField> = {
  title: 'Design System/DescriptionField',
  component: DescriptionField,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    sub: { control: 'text' },
  },
  args: {
    title: '생성할 모임의\n이름을 입력해주세요.',
    sub: '모임 이름은 수정이 불가능해요.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DescriptionField>;

export const Default: Story = {};

export const WithoutSub: Story = {
  args: { sub: undefined },
};
