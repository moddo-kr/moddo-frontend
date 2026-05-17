import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getToken } from '@/shared/design-system';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function DialogModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        ariaLabel="지출 내역 입력 종료 확인"
      >
        <Dialog
          title="지출 내역 입력을 종료할까요?"
          description="입력한 내용은 사라지지만, 모임이 생성되어 있어 나중에 다시 추가할 수 있어요."
          mainAction={{ label: '끝내기', onClick: () => setOpen(false) }}
          alternativeAction={{
            label: '계속 입력',
            onClick: () => setOpen(false),
          }}
        />
      </Modal>
    </>
  );
}

function CustomContentModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>커스텀 모달 열기</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        ariaLabel="링크 공유하기"
      >
        <div
          style={{
            width: '100%',
            maxWidth: 330,
            margin: '0 auto',
            padding: 24,
            borderRadius: 16,
            background: getToken('bg.normal'),
            color: getToken('fg.strong'),
          }}
        >
          <strong>링크 공유하기</strong>
          <p style={{ margin: '16px 0 0', color: getToken('fg.normal') }}>
            Dialog가 아닌 컴포넌트도 Modal 안에 렌더링할 수 있답니다.
          </p>
        </div>
      </Modal>
    </>
  );
}

export const WithDialog: Story = {
  render: () => <DialogModalExample />,
};

export const WithCustomContent: Story = {
  render: () => <CustomContentModalExample />,
};
