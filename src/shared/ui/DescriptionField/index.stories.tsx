import { Meta, StoryObj } from '@storybook/react';
import Text from '@/shared/ui/Text';
import DescriptionField from '.';

const SAMPLE_TITLE = '생성할 모임의\n이름을 입력해주세요.';
const SAMPLE_SUB = '모임 이름은 20자 이내로 작성해주세요.';

const meta: Meta<typeof DescriptionField> = {
  title: 'Components/DescriptionField',
  component: DescriptionField,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    sub: {
      control: 'text',
    },
  },
  args: {
    title: SAMPLE_TITLE,
    sub: SAMPLE_SUB,
  },
};

export default meta;

type Story = StoryObj<typeof DescriptionField>;

export const Default: Story = {
  args: {
    title: SAMPLE_TITLE,
    sub: SAMPLE_SUB,
  },
};

export const StyledTitle: Story = {
  args: {
    title: (
      <>
        <Text variant="heading2" color="semantic.orange.default">
          DND 7조 첫모임
        </Text>
        {`의\n지출 내역을 입력해주세요.`}
      </>
    ),
    sub: '총 지출 금액을 1/N로 나눌게요.',
  },
};
