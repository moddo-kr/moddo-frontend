import * as S from './PriceDisplay.styles';

interface PriceDisplayProps {
  value?: string;
  placeholder?: string;
}

function PriceDisplay({ value, placeholder = '금액입력' }: PriceDisplayProps) {
  return (
    <S.Container>
      {value ? (
        <S.Value>{value}</S.Value>
      ) : (
        <S.Placeholder>{placeholder}</S.Placeholder>
      )}
      <S.Unit>원</S.Unit>
    </S.Container>
  );
}

export { PriceDisplay };
export type { PriceDisplayProps };
