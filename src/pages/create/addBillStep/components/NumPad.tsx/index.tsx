import { useState } from 'react';
import numPadController from '../../utils/numPadController';

interface NumPadProps {
  onChange: (value: number) => void;
}

function NumPad({ onChange }: NumPadProps) {
  const [value, setValue] = useState<number>(0);

  const { CELLS, SHORTCUTS } = numPadController;

  return (
    <div>
      <div>{value === 0 ? '금액 입력' : value.toLocaleString()} 원</div>
      <div>
        {SHORTCUTS.map((shortcut) => (
          <button
            type="button"
            key={shortcut.label}
            onClick={() => {
              if (shortcut.handler === null) return;
              setValue(shortcut.handler(value));
            }}
          >
            {shortcut.label}
          </button>
        ))}
      </div>
      <div>
        {CELLS.map((row, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`cell-row-${index}`}>
            {row.map((cell) => (
              <button
                type="button"
                key={cell.label ?? 'empty'}
                onClick={() => {
                  if (cell.handler === null) return;
                  setValue(cell.handler(value));
                }}
              >
                {cell.label}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          onChange(value);
        }}
      >
        확인
      </button>
    </div>
  );
}

export default NumPad;
