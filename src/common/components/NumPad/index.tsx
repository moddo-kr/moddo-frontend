import numPadController from '@/common/components/NumPad/numPadController';
import * as S from './index.styles';

interface NumPadProps {
  input: number; // Numpad의 입력값
  setInput: (value: number) => void;
  onClose?: () => void;
}

function NumPad({ input, setInput, onClose }: NumPadProps) {
  const { CELLS, SHORTCUTS } = numPadController;

  return (
    <div>
      <S.ValueWrapper>
        <S.DisplayValue $isEmpty={input === 0}>
          {input === 0 ? '금액입력' : input.toLocaleString()}
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
              setInput(shortcut.handler(input));
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
              setInput(cell.handler(input));
            }}
          >
            {cell.label}
          </S.NumCellButton>
        ))}
      </S.NumCellWrapper>
    </div>
  );
}

export default NumPad;
