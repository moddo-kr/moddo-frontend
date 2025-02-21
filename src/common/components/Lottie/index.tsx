import Lottie from 'lottie-react';
import coin from '@/assets/lottie/coin.json';
import * as S from './index.styles';

export const CoinLottie = () => {
  return (
    <S.Wrapper>
      <Lottie animationData={coin} />
    </S.Wrapper>
  );
};
