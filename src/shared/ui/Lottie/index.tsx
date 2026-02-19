import Lottie from 'lottie-react';
import coin from '@/shared/assets/lottie/coin.json';
import * as S from './index.styles';

export function CoinLottie() {
  return (
    <S.Wrapper>
      <Lottie animationData={coin} />
    </S.Wrapper>
  );
}
