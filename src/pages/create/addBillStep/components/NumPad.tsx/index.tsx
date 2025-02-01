import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import numPadController from '../../utils/numPadController';
import * as S from './index.styles';

interface NumPadProps {
  onChange: (value: number) => void;
}

function NumPad({ onChange }: NumPadProps) {
  const [value, setValue] = useState<number>(0);

  const { CELLS, SHORTCUTS } = numPadController;

  return (
    <S.NumPadContainer>
      <div>{value === 0 ? '금액 입력' : value.toLocaleString()} 원</div>
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
        }}
      >
        확인
      </Button>
    </S.NumPadContainer>
  );
}

export default NumPad;
