import { Meta, StoryObj } from '@storybook/react';
import { Dummy } from '@/shared/assets/svgs/icon';
import Text from '@/shared/components/Text';
import theme from '@/shared/styles/theme';
import Input from '.';

const SAMPLE_LABEL = 'label';
const SAMPLE_PLACEHOLDER = 'placeholder';
const SAMPLE_VALUE = `즐거운 만남, 끝까지 즐겁게`;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
  parameters: {
    pseudo: {
      focusWithin: '.input-wrapper:has(.focus)',
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: SAMPLE_LABEL,
    placeholder: SAMPLE_PLACEHOLDER,
    required: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: SAMPLE_LABEL,
    placeholder: SAMPLE_PLACEHOLDER,
  },
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: theme.unit[8] }}
    >
      <Text variant="title">Empty</Text>
      <Input {...args} />
      <Text variant="title">Filled</Text>
      <Input {...args} defaultValue={SAMPLE_VALUE} />
      <Text variant="title">Error</Text>
      <Input {...args} error />
      <Text variant="title">Disabled</Text>
      <Input {...args} disabled />
      <Text variant="title">Focused</Text>
      <Input {...args} className="focus" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    placeholder: SAMPLE_PLACEHOLDER,
  },
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: theme.unit[8] }}
    >
      <Text variant="title">Empty</Text>
      <Input {...args} />
      <Text variant="title">Filled</Text>
      <Input {...args} defaultValue={SAMPLE_VALUE} />
      <Text variant="title">Error</Text>
      <Input {...args} error />
      <Text variant="title">Disabled</Text>
      <Input {...args} disabled />
      <Text variant="title">Focused</Text>
      <Input {...args} className="focus" />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: SAMPLE_LABEL,
    placeholder: SAMPLE_PLACEHOLDER,
    icon: <Dummy width={theme.unit[24]} />,
  },
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: theme.unit[8] }}
    >
      <Text variant="title">Empty</Text>
      <Input {...args} />
      <Text variant="title">Filled</Text>
      <Input {...args} defaultValue={SAMPLE_VALUE} />
      <Text variant="title">Error</Text>
      <Input {...args} error />
      <Text variant="title">Disabled</Text>
      <Input {...args} disabled />
      <Text variant="title">Focused</Text>
      <Input {...args} className="focus" />
    </div>
  ),
};
