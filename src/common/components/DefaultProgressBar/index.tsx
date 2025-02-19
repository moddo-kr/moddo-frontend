import * as S from './index.style';

interface DefaultProgressBarProps {
  percentage: number;
}

function DefaultProgressBar({ percentage }: DefaultProgressBarProps) {
  return (
    <S.Trail>
      <S.Path percentage={percentage} />
    </S.Trail>
  );
}

export default DefaultProgressBar;
