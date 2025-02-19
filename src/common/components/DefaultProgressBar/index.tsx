import * as S from './index.style';

interface DefaultProgressBar {
  percentage: number;
}

function DefaultProgressBar({ percentage }: DefaultProgressBar) {
  return (
    <S.Trail>
      <S.Path percentage={percentage} />
    </S.Trail>
  );
}

export default DefaultProgressBar;
