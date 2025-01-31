interface NumPadCellType {
  label: string | null;
  handler: ((value: number) => number) | null;
}

interface NumPadControllerType {
  CELLS: NumPadCellType[][];
  SHORTCUTS: NumPadCellType[][];
  addDigit: (value: number, digit: number) => number;
  deleteDigit: (value: number) => number;
  applyShortcut: (value: number, shortcutValue: number) => number;
  clearAll: () => number;
}

const NumPadController: NumPadControllerType = {
  CELLS: [
    [
      {
        label: '1',
        handler: (value: number) => NumPadController.addDigit(value, 1),
      },
      {
        label: '2',
        handler: (value: number) => NumPadController.addDigit(value, 2),
      },
      {
        label: '3',
        handler: (value: number) => NumPadController.addDigit(value, 3),
      },
    ],
    [
      {
        label: '4',
        handler: (value: number) => NumPadController.addDigit(value, 4),
      },
      {
        label: '5',
        handler: (value: number) => NumPadController.addDigit(value, 5),
      },
      {
        label: '6',
        handler: (value: number) => NumPadController.addDigit(value, 6),
      },
    ],
    [
      {
        label: '7',
        handler: (value: number) => NumPadController.addDigit(value, 7),
      },
      {
        label: '8',
        handler: (value: number) => NumPadController.addDigit(value, 8),
      },
      {
        label: '9',
        handler: (value: number) => NumPadController.addDigit(value, 9),
      },
    ],
    [
      {
        label: null,
        handler: null,
      },
      {
        label: '0',
        handler: (value: number) => NumPadController.addDigit(value, 0),
      },
      {
        label: '←',
        handler: (value: number) => NumPadController.deleteDigit(value),
      },
    ],
  ],

  SHORTCUTS: [
    [
      {
        label: '+ 1만',
        handler: (value: number) =>
          NumPadController.applyShortcut(value, 10_000),
      },
      {
        label: '+ 5만',
        handler: (value: number) =>
          NumPadController.applyShortcut(value, 50_000),
      },
      {
        label: '+ 10만',
        handler: (value: number) =>
          NumPadController.applyShortcut(value, 100_000),
      },
      {
        label: '전체삭제',
        handler: (_value: number) => NumPadController.clearAll(),
      },
    ],
  ],

  /** 숫자패드를 눌러서 오른쪽에 숫자 하나를 추가하는 함수 */
  addDigit: (value, digit) => value * 10 + digit,

  /** 숫자패드를 눌러서 오른쪽에 숫자 하나를 삭제하는 함수 */
  deleteDigit: (value) => Math.floor(value / 10),

  /** Shortcut을 눌렀을 때 기존 값에 Shortcut 값을 더하는 함수 */
  applyShortcut: (value, shortcutValue) => value + shortcutValue,

  /** 숫자패드를 눌러서 모든 값을 삭제하는 함수 */
  clearAll: (): number => 0,
};

export default NumPadController;
