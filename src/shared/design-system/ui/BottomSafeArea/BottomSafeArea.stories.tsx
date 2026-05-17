import type { Meta, StoryObj } from '@storybook/react';
import { BottomSafeArea } from './BottomSafeArea';

const meta: Meta<typeof BottomSafeArea> = {
  title: 'Utilities/BottomSafeArea',
  component: BottomSafeArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSafeArea>;

export const Default: Story = {};
