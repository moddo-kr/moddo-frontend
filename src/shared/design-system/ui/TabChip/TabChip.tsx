import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import * as S from './TabChip.styles';

interface TabChipListContextValue {
  activeValue: string;
  onValueChange: (value: string) => void;
}

interface TabChipListProps {
  activeValue: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}

interface TabChipProps {
  label: string;
  value: string;
}

const TabChipListContext = createContext<TabChipListContextValue | undefined>(
  undefined
);

function useTabChipListContext() {
  const context = useContext(TabChipListContext);
  if (!context) {
    throw new Error('TabChip은 TabChipList 내부에서 사용되어야 합니다.');
  }
  return context;
}

function TabChipList({
  activeValue,
  onValueChange,
  children,
}: TabChipListProps) {
  const contextValue = useMemo(
    () => ({ activeValue, onValueChange }),
    [activeValue, onValueChange]
  );

  return (
    <TabChipListContext.Provider value={contextValue}>
      <S.TabChipList>{children}</S.TabChipList>
    </TabChipListContext.Provider>
  );
}

function TabChip({ label, value }: TabChipProps) {
  const { activeValue, onValueChange } = useTabChipListContext();
  const isActive = activeValue === value;

  return (
    <S.TabChip
      type="button"
      $isActive={isActive}
      onClick={() => onValueChange(value)}
    >
      {label}
    </S.TabChip>
  );
}

export { TabChipList, TabChip };
export type { TabChipListProps, TabChipProps };
