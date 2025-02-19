import { Meta, StoryObj } from '@storybook/react';
import { alertVariant, alertType } from './index.type';
import Alert from '.';

const SAMPLE_TEXT = '{이름}님에게 남은 {NNN}원이 부과됐어요.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '21.875rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'radio',
      options: alertType,
    },
    variant: {
      control: 'radio',
      options: alertVariant,
    },
    message: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: 'info',
    message: SAMPLE_TEXT,
  },
};

export const ColoredAlert = () => (
  <>
    <Alert type="info" message={SAMPLE_TEXT} />
    <Alert type="danger" message={SAMPLE_TEXT} />
    <Alert type="success" message={SAMPLE_TEXT} />
    <Alert type="warning" message={SAMPLE_TEXT} />
  </>
);

export const WhiteAlert = () => (
  <>
    <Alert type="info" variant="white" message={SAMPLE_TEXT} />
    <Alert type="danger" variant="white" message={SAMPLE_TEXT} />
    <Alert type="success" variant="white" message={SAMPLE_TEXT} />
    <Alert type="warning" variant="white" message={SAMPLE_TEXT} />
  </>
);
