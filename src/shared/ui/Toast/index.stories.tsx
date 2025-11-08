import { Meta } from '@storybook/react';
import Toast, { showToast } from '.';
import { ToastProps, ToastType } from './index.type';

const SAMPLE_TYPE = 'info';
const SAMPLE_CONTENT = '메시지를 입력해주세요';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'error', 'success', 'warning'] as ToastType[],
    },
    content: {
      control: 'text',
    },
  },
  args: {
    type: SAMPLE_TYPE as ToastType,
    content: SAMPLE_CONTENT,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '30rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = ({ type, content }: ToastProps) => {
  const handleButtonClick = () => {
    showToast({ type, content });
  };

  return (
    <>
      <button type="button" onClick={handleButtonClick}>
        토스트 메세지
      </button>
      <Toast />
    </>
  );
};
