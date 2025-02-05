import type { Meta, StoryFn } from '@storybook/react';
import Header from '.';
import { HeaderProps } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    showIcon: { control: 'boolean' },
    type: {
      control: 'radio',
      options: ['TitleLeft', 'TitleCenter'],
    },
    handleBackButtonClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

/** TitleLeft 스토리 */
export const TitleLeft = Template.bind({});
TitleLeft.args = {
  title: '모임 선택',
  showIcon: true,
  type: 'TitleLeft',
};

/** TitleCenter 스토리 */
export const TitleCenter = Template.bind({});
TitleCenter.args = {
  title: '모임 선택',
  showIcon: true,
  type: 'TitleCenter',
};
