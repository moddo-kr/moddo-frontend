import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import * as S from './Tab.styles';

interface TabListContextValue {
  activeTab: string;
  onTabChange: (value: string) => void;
}

interface TabListProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  children: ReactNode;
}

interface TabProps {
  label: string;
  value: string;
}

const TabListContext = createContext<TabListContextValue | undefined>(
  undefined
);

function useTabListContext() {
  const context = useContext(TabListContext);
  if (!context) {
    throw new Error('Tab은 TabList 내부에서 사용되어야 합니다.');
  }
  return context;
}

function TabList({ activeTab, onTabChange, children }: TabListProps) {
  const contextValue = useMemo(
    () => ({ activeTab, onTabChange }),
    [activeTab, onTabChange]
  );

  return (
    <TabListContext.Provider value={contextValue}>
      <S.TabList role="tablist">{children}</S.TabList>
    </TabListContext.Provider>
  );
}

function Tab({ label, value }: TabProps) {
  const { activeTab, onTabChange } = useTabListContext();
  const isActive = activeTab === value;

  return (
    <S.Tab
      type="button"
      role="tab"
      aria-selected={isActive}
      $isActive={isActive}
      onClick={() => onTabChange(value)}
    >
      {label}
    </S.Tab>
  );
}

export { TabList, Tab };
export type { TabListProps, TabProps };
