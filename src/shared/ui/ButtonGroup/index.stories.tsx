import { Meta, StoryObj } from '@storybook/react';
import Button from '@/shared/ui/Button';
import { buttonGroupDirection } from './index.type';
import ButtonGroup from '.';

const SAMPLE_TEXT = 'label';

const SampleButtons = (
  <>
    <Button>{SAMPLE_TEXT}</Button>
    <Button variant="secondary">{SAMPLE_TEXT}</Button>
  </>
);

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '21.875rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    direction: {
      control: 'radio',
      options: buttonGroupDirection,
    },
  },
  args: {
    direction: 'horizontal',
    children: SampleButtons,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: SampleButtons,
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: SampleButtons,
  },
};
