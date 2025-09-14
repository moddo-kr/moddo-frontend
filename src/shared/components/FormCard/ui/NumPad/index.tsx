import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import Text from '@/shared/components/Text';
import * as S from './index.styles';
import NumPadController from './numPadController';

interface NumPadProps {
  input: number; // Numpad의 입력값
  setInput: (value: number) => void;
  onClose?: () => void;
}

function NumPad({ input, setInput, onClose }: NumPadProps) {
  const numPadController = useMemo(
    () => new NumPadController(() => onClose?.()),
    [onClose]
  );

  return (
    <S.NumPadWrapper>
      <S.ValueWrapper>
        <S.DisplayValue $isEmpty={input === 0}>
          {input === 0 ? '금액입력' : input.toLocaleString()}
        </S.DisplayValue>
        <Text variant="heading1" color="semantic.text.strong">
          원
        </Text>
      </S.ValueWrapper>
      <S.ShortcutWrapper>
        {numPadController.SHORTCUTS.map((shortcut) => (
          <S.ShortcutButton
            type="button"
            key={nanoid(10)}
            $isDanger={shortcut?.isDanger}
            onClick={() => {
              setInput(shortcut.handler(input) as number);
            }}
          >
            {shortcut.label}
          </S.ShortcutButton>
        ))}
      </S.ShortcutWrapper>
      <S.NumCellWrapper>
        {numPadController.CELLS.map((cell) => (
          <S.NumCellButton
            type="button"
            key={nanoid(10)}
            $isSecondary={cell?.isSecondary}
            onClick={() =>
              cell?.type === 'function'
                ? cell.handler(input)
                : setInput(cell.handler(input) as number)
            }
          >
            {cell.label}
          </S.NumCellButton>
        ))}
      </S.NumCellWrapper>
    </S.NumPadWrapper>
  );
}

export default NumPad;
