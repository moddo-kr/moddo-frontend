import SvgBtnShortcut from '@/shared/assets/svgs/icon/BtnShortcut';
import * as S from './Keypad.styles';

type KeyValue =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'delete'
  | 'cancel';

interface KeypadProps {
  onPress: (key: KeyValue) => void;
}

const KEYPAD_KEYS: KeyValue[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'cancel',
  '0',
  'delete',
];

function Keypad({ onPress }: KeypadProps) {
  return (
    <S.Grid>
      {KEYPAD_KEYS.map((key) => (
        <S.KeyButton
          key={key}
          type="button"
          onClick={() => onPress(key)}
          aria-label={key === 'delete' ? '삭제' : undefined}
        >
          {key === 'delete' && <SvgBtnShortcut width={24} height={24} />}
          {key === 'cancel' && <S.CancelText>취소</S.CancelText>}
          {key !== 'delete' && key !== 'cancel' && (
            <S.NumberText>{key}</S.NumberText>
          )}
        </S.KeyButton>
      ))}
    </S.Grid>
  );
}

export { Keypad };
export type { KeypadProps, KeyValue };
