import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabList, Tab } from './Tab';

const meta: Meta = {
  title: 'Components/Tab',
  tags: ['autodocs'],
};

export default meta;

function DefaultTabsStory() {
  const [activeTab, setActiveTab] = useState('참여자별 정산');

  return (
    <TabList activeTab={activeTab} onTabChange={setActiveTab}>
      <Tab label="참여자별 정산" value="참여자별 정산" />
      <Tab label="전체 지출내역" value="전체 지출내역" />
    </TabList>
  );
}

export const Default: StoryObj = {
  render: () => <DefaultTabsStory />,
};

function ThreeTabsStory() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <TabList activeTab={activeTab} onTabChange={setActiveTab}>
      <Tab label="첫 번째" value="tab1" />
      <Tab label="두 번째" value="tab2" />
      <Tab label="세 번째" value="tab3" />
    </TabList>
  );
}

export const ThreeTabs: StoryObj = {
  render: () => <ThreeTabsStory />,
};
