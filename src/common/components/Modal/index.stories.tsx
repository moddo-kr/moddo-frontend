import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '.';
import Button from '../Button'; // Button 컴포넌트

const SAMPLE_TITLE = '타이틀입력 최대 한줄';
const SAMPLE_SUBSCRIBE = '설명을 입력해주세요.';
const SAMPLE_CANCEL = 'cancel';
const SAMPLE_SUBMIT = 'submit';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['default', 'empty'],
    },
    title: { control: 'text' },
    subscribe: { control: 'text' },
    cancel: { control: 'text' },
    submit: { control: 'text' },
  },
  args: {
    open: false,
    variant: 'default',
    title: SAMPLE_TITLE,
    subscribe: SAMPLE_SUBSCRIBE,
    cancel: SAMPLE_CANCEL,
    submit: SAMPLE_SUBMIT,
    onCancel: () => {},
    onSubmit: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const DefaultStory = (args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleClick}>Toggle Default Modal</Button>
      <Modal
        {...args}
        open={open}
        setOpen={setOpen}
        onCancel={handleClick}
        onSubmit={() => {
          alert('승인 버튼 클릭');
          handleClick();
        }}
      />
    </>
  );
};

export const Default: Story = {
  args: {
    variant: 'default',
    title: SAMPLE_TITLE,
    subscribe: SAMPLE_SUBSCRIBE,
    cancel: SAMPLE_CANCEL,
    submit: SAMPLE_SUBMIT,
  },

  render: DefaultStory,
};

const EmptyStory = (args: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Toggle Empty Modal</Button>
      <Modal {...args} open={open} setOpen={setOpen}>
        비어 있는 Modal입니다!
      </Modal>
    </>
  );
};

export const Empty: Story = {
  args: {
    variant: 'empty',
  },

  render: EmptyStory,
};
