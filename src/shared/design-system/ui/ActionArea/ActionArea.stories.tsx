import type { Meta, StoryObj } from '@storybook/react';
import { ActionArea } from './ActionArea';

const meta: Meta<typeof ActionArea> = {
  title: 'Components/ActionArea',
  component: ActionArea,
  tags: ['autodocs'],
  args: {
    mainAction: { label: '메인 액션', onClick: () => {} },
  },
};

export default meta;
type Story = StoryObj<typeof ActionArea>;

export const VerticalSingle: Story = {
  args: {
    layout: 'vertical',
  },
};

export const VerticalWithAlternative: Story = {
  args: {
    layout: 'vertical',
    alternativeAction: { label: '보조 액션', onClick: () => {} },
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
    alternativeAction: { label: '대체 액션', onClick: () => {} },
  },
};

export const WithoutSafeArea: Story = {
  args: {
    layout: 'horizontal',
    alternativeAction: { label: '대체 액션', onClick: () => {} },
    showBottomSafeArea: false,
  },
};
