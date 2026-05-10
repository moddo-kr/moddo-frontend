import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { getToken } from '@/shared/design-system';
import { ActionArea, Button } from '@/shared/design-system/ui';
import { BottomSheet, BottomSheetProps } from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Design System/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const PageBackground = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: '375px',
      height: '500px',
      background: getToken('bg.normal'),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem',
      position: 'relative',
    }}
  >
    {children}
  </div>
);

function WithTitleExample(args: Partial<BottomSheetProps>) {
  const [open, setOpen] = useState(false);

  return (
    <PageBackground>
      <Button onClick={() => setOpen(true)}>바텀시트 열기</Button>
      <BottomSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="헤더가 있는 바텀시트"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: `0 ${getToken('padding.6')} 1.75rem`,
          }}
        >
          <p style={{ margin: 0, color: getToken('fg.normal') }}>
            content padding은 안쪽 사용처에서 설정합니다.
          </p>
          <ActionArea
            showBottomSafeArea={false}
            hasHorizontalPadding={false}
            mainAction={{ label: '추가하기', onClick: () => setOpen(false) }}
            alternativeAction={{ label: '닫기', onClick: () => setOpen(false) }}
          />
        </div>
      </BottomSheet>
    </PageBackground>
  );
}

function WithoutTitleExample(args: Partial<BottomSheetProps>) {
  const [open, setOpen] = useState(false);

  return (
    <PageBackground>
      <Button onClick={() => setOpen(true)}>바텀시트 열기 (헤더 없음)</Button>
      <BottomSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        ariaLabel="헤더 없는 바텀시트"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem 1.25rem 1.75rem',
          }}
        >
          <p
            style={{ margin: 0, color: getToken('fg.strong'), fontWeight: 700 }}
          >
            헤더 없는 바텀시트
          </p>
          <p
            style={{
              margin: 0,
              color: getToken('fg.normal'),
              textAlign: 'center',
            }}
          >
            title prop 없이 사용하면 헤더가 렌더링되지 않습니다.
          </p>
          <ActionArea
            showBottomSafeArea={false}
            hasHorizontalPadding={false}
            mainAction={{ label: '확인', onClick: () => setOpen(false) }}
          />
        </div>
      </BottomSheet>
    </PageBackground>
  );
}

export const WithTitle: Story = {
  render: (args) => <WithTitleExample {...args} />,
};

export const WithoutTitle: Story = {
  render: (args) => <WithoutTitleExample {...args} />,
};
