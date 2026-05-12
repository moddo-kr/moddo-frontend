import { ReactNode, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { getToken } from '@/shared/design-system';
import { ExpenseAmountInput } from '.';

const meta: Meta<typeof ExpenseAmountInput> = {
  title: 'Feature UI/ExpenseAmountInput',
  component: ExpenseAmountInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ExpenseAmountInput>;

const PageBackground = ({ children }: { children: ReactNode }) => (
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

function DefaultStory() {
  const [open, setOpen] = useState(false);
  const [, setValue] = useState(0);

  return (
    <PageBackground>
      <ExpenseAmountInput
        initialValue={0}
        open={open}
        setOpen={setOpen}
        setValue={(v) => {
          setValue(v);
        }}
      />
    </PageBackground>
  );
}

export const Default: Story = {
  render: () => <DefaultStory />,
};
