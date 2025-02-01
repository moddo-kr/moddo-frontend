import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import numPadController from '../../utils/numPadController';
import * as S from './index.styles';

interface NumPadProps {
  initialInput: number;
  onChange: (value: number) => void;
  onClose?: () => void;
}

function NumPad({ onChange, initialInput, onClose }: NumPadProps) {
  // TODO : 입력 가능한 최댓값을 제한해야 할듯.
  const [value, setValue] = useState<number>(initialInput);

  const { CELLS, SHORTCUTS } = numPadController;

  return (
    <S.NumPadContainer>
      <S.DisplayWrapper>
        <S.DisplayDescription>결제 금액</S.DisplayDescription>
        <S.ValueWrapper>
          <S.DisplayValue isEmpty={value === 0}>
            {value === 0 ? '금액입력' : value.toLocaleString()}
          </S.DisplayValue>
          <S.DisplayValueUnit>원</S.DisplayValueUnit>
        </S.ValueWrapper>
      </S.DisplayWrapper>
      <S.ShortcutWrapper>
        {SHORTCUTS.map((shortcut) => (
          <S.ShortcutButton
            type="button"
            key={shortcut.label}
            onClick={() => {
              if (shortcut.handler === null) return;
              setValue(shortcut.handler(value));
            }}
          >
            {shortcut.label}
          </S.ShortcutButton>
        ))}
      </S.ShortcutWrapper>
      <S.NumCellWrapper>
        {CELLS.map((cell) => (
          <S.NumCellButton
            type="button"
            key={cell.label ?? 'empty'}
            onClick={() => {
              if (cell.handler === null) return;
              setValue(cell.handler(value));
            }}
          >
            {cell.label}
          </S.NumCellButton>
        ))}
      </S.NumCellWrapper>
      {/* NOTE: 임시 버튼.. */}
      <Button
        w="100%"
        type="button"
        onClick={() => {
          onChange(value);
          onClose?.();
        }}
      >
        확인
      </Button>
    </S.NumPadContainer>
  );
}

export default NumPad;
