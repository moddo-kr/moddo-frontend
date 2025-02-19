import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Button from '@/common/components/Button';
import BottomSheet, { BottomSheetProps } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    isPadding: { control: 'boolean' },
    pb: { control: 'number' },
  },
  args: {
    open: false,
    isPadding: false,
    pb: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const DefaultStory = (args: BottomSheetProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleClick}>Toggle BottomSheet</Button>
      <BottomSheet {...args} open={open} setOpen={setOpen}>
        <div>바텀 시트 안의 내용은 이렇게 들어갑니다!</div>
        <div>최대 너비는 600px입니다!</div>
        <Button>바텀 시트 예시 버튼</Button>
      </BottomSheet>
    </>
  );
};

export const Default: Story = {
  args: {
    open: false,
    setOpen: () => {},
    isPadding: false,
    pb: undefined,
  },
  render: DefaultStory,
};
