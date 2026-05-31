import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabChipList, TabChip } from './TabChip';

const meta: Meta = {
  title: 'Components/TabChip',
  tags: ['autodocs'],
};

export default meta;

function DefaultStory() {
  const [activeValue, setActiveValue] = useState('받을 정산');

  return (
    <TabChipList activeValue={activeValue} onValueChange={setActiveValue}>
      <TabChip label="받을 정산" value="받을 정산" />
      <TabChip label="보낼 정산" value="보낼 정산" />
    </TabChipList>
  );
}

export const Default: StoryObj = {
  render: () => <DefaultStory />,
};

function ThreeChipsStory() {
  const [activeValue, setActiveValue] = useState('전체');

  return (
    <TabChipList activeValue={activeValue} onValueChange={setActiveValue}>
      <TabChip label="전체" value="전체" />
      <TabChip label="받을 정산" value="받을 정산" />
      <TabChip label="보낼 정산" value="보낼 정산" />
    </TabChipList>
  );
}

export const ThreeChips: StoryObj = {
  render: () => <ThreeChipsStory />,
};
