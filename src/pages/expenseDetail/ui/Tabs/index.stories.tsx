import { useState } from 'react';
import { Meta } from '@storybook/react';
import theme from '@/shared/styles/theme';
import { TabsList, Tab } from '.';

const meta: Meta = {
  title: 'Components/Tabs',
  component: TabsList,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const [activeTab, setActiveTab] = useState<string>('참여자별 정산');

  return (
    <>
      <TabsList activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab label="참여자별 정산" value="참여자별 정산" />
        <Tab label="전체 지출 내역" value="전체 지출 내역" />
      </TabsList>
      <div
        style={{
          borderTop: `1px solid ${theme.color.semantic.border.subtle}`,
          paddingTop: theme.unit[16],
        }}
      >
        {activeTab === '참여자별 정산' && <div>참여자별 정산</div>}
        {activeTab === '전체 지출 내역' && <div>전체 지출 내역</div>}
      </div>
    </>
  );
};
