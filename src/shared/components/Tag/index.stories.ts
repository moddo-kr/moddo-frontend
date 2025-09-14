import { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

const SAMPLE_LABEL = 'label';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    onClose: {
      action: 'onClose',
    },
  },
  args: {
    label: SAMPLE_LABEL,
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    onClose: () => {
      // eslint-disable-next-line no-alert
      alert('Close button clicked!');
    },
  },
};
