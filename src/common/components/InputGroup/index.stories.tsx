import { Meta, StoryObj } from '@storybook/react';
import Input from '@/common/components/Input';
import Button from '@/common/components/Button';
import InputGroup from '.';

const SAMPLE_PLACEHOLDER = 'placeholder';
const SAMPLE_BUTTON_TEXT = 'label';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
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
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {},
  render: () => (
    <InputGroup>
      <Input placeholder={SAMPLE_PLACEHOLDER} />
      <Button>{SAMPLE_BUTTON_TEXT}</Button>
    </InputGroup>
  ),
};
