import { createContext, useContext, useMemo } from 'react';
import Text from '@/shared/ui/Text';
import * as S from './index.styles';

interface TabsListProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

interface TabProps {
  label: string;
  value: string;
}

const TabListContext = createContext<
  Omit<TabsListProps, 'children'> | undefined
>(undefined);

export function TabsList({ activeTab, setActiveTab, children }: TabsListProps) {
  const contextValue = useMemo(
    () => ({ activeTab, setActiveTab }),
    [activeTab, setActiveTab]
  );

  return (
    <TabListContext.Provider value={contextValue}>
      <S.TabsList>{children}</S.TabsList>
    </TabListContext.Provider>
  );
}

export function Tab({ label, value }: TabProps) {
  const context = useContext(TabListContext);
  if (!context) {
    throw new Error('Tab은 TabsList 내부에서 사용되어야 합니다.');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <S.Tab $isActive={isActive} onClick={() => setActiveTab(value)}>
      <Text
        variant={isActive ? 'body1Sb' : 'body1R'}
        color={isActive ? 'semantic.text.default' : 'semantic.text.disabled'}
      >
        {label}
      </Text>
    </S.Tab>
  );
}
