import { BtnShortcut } from '@/shared/assets/svgs/icon';
import { ReactNode } from 'react';

interface NumPadCellType {
  label: ReactNode;
  handler: (value: number) => number | void;
  type?: 'number' | 'function';
  isDanger?: boolean;
  isSecondary?: boolean;
}

class NumPadController {
  #cells: NumPadCellType[];

  #shortcuts: NumPadCellType[];

  #onClose: () => void;

  constructor(onClose: () => void) {
    this.#onClose = onClose;
    this.#cells = [
      {
        label: '1',
        handler: (value) => NumPadController.addDigit(value, 1),
      },
      {
        label: '2',
        handler: (value) => NumPadController.addDigit(value, 2),
      },
      {
        label: '3',
        handler: (value) => NumPadController.addDigit(value, 3),
      },
      {
        label: '4',
        handler: (value) => NumPadController.addDigit(value, 4),
      },
      {
        label: '5',
        handler: (value) => NumPadController.addDigit(value, 5),
      },
      {
        label: '6',
        handler: (value) => NumPadController.addDigit(value, 6),
      },
      {
        label: '7',
        handler: (value) => NumPadController.addDigit(value, 7),
      },
      {
        label: '8',
        handler: (value) => NumPadController.addDigit(value, 8),
      },
      {
        label: '9',
        handler: (value) => NumPadController.addDigit(value, 9),
      },
      {
        label: '취소',
        handler: this.#onClose,
        type: 'function',
        isSecondary: true,
      },
      {
        label: '0',
        handler: (value) => NumPadController.addDigit(value, 0),
      },
      {
        label: <BtnShortcut width={24} />,
        handler: (value) => NumPadController.deleteDigit(value),
        isSecondary: true,
      },
    ];
    this.#shortcuts = [
      {
        label: '+ 1만',
        handler: (value) => NumPadController.applyShortcut(value, 10_000),
      },
      {
        label: '+ 5만',
        handler: (value) => NumPadController.applyShortcut(value, 50_000),
      },
      {
        label: '+ 10만',
        handler: (value) => NumPadController.applyShortcut(value, 100_000),
      },
      {
        label: '전체삭제',
        handler: (_value) => NumPadController.clearAll(),
        isDanger: true,
      },
    ];
  }

  get CELLS() {
    return this.#cells;
  }

  get SHORTCUTS() {
    return this.#shortcuts;
  }

  /** 숫자패드를 눌러서 오른쪽에 숫자 하나를 추가하는 함수 */
  static addDigit(value: number, digit: number) {
    return value * 10 + digit;
  }

  /** 숫자패드를 눌러서 오른쪽에 숫자 하나를 삭제하는 함수 */
  static deleteDigit(value: number) {
    return Math.floor(value / 10);
  }

  /** Shortcut을 눌렀을 때 기존 값에 Shortcut 값을 더하는 함수 */
  static applyShortcut(value: number, shortcutValue: number) {
    return value + shortcutValue;
  }

  /** 숫자패드를 눌러서 모든 값을 삭제하는 함수 */
  static clearAll() {
    return 0;
  }
}

export default NumPadController;
