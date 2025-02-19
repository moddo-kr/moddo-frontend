import * as S from './index.style';

function DefaultProgressBar(percentage: number) {
  return (
    <S.Trail>
      <S.Path percentage={percentage} />
    </S.Trail>
  );
}

export default DefaultProgressBar;
