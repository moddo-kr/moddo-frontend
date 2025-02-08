import { useState } from 'react';
import { Close } from '@/assets/svgs/icon';
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
      <S.Header>
        <S.Description>결제 금액 입력</S.Description>
        <button type="button" onClick={onClose}>
          <Close width="1.5rem" />
        </button>
      </S.Header>
      <S.ValueWrapper>
        <S.DisplayValue $isEmpty={value === 0}>
          {value === 0 ? '금액입력' : value.toLocaleString()}
        </S.DisplayValue>
        <S.DisplayValueUnit>원</S.DisplayValueUnit>
      </S.ValueWrapper>
      <S.ShortcutWrapper>
        {SHORTCUTS.map((shortcut) => (
          <S.ShortcutButton
            type="button"
            key={shortcut.label}
            $isDanger={shortcut?.isDanger}
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
            $isSecondary={cell?.isSecondary}
            onClick={() => {
              if (cell.handler === null) return;
              setValue(cell.handler(value));
            }}
          >
            {cell.label}
          </S.NumCellButton>
        ))}
      </S.NumCellWrapper>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={() => {
            onChange(value);
            onClose?.();
          }}
        >
          완료
        </S.BottomButton>
      </S.ButtonWrapper>
    </S.NumPadContainer>
  );
}

export default NumPad;
