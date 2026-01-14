import Lottie from 'lottie-react';
import RawLottieStep1 from '@/shared/assets/lotties/onboarding-step-1.json';
import RawLottieStep2 from '@/shared/assets/lotties/onboarding-step-2.json';
import RawLottieStep3 from '@/shared/assets/lotties/onboarding-step-3.json';
import RawLottieStep4 from '@/shared/assets/lotties/onboarding-step-4.json';
import * as S from './index.styles';

export function LottieStep1() {
  return (
    <S.Step1Wrapper>
      <Lottie animationData={RawLottieStep1} />
    </S.Step1Wrapper>
  );
}

export function LottieStep2() {
  return (
    <S.Step234Wrapper>
      <Lottie animationData={RawLottieStep2} />
    </S.Step234Wrapper>
  );
}

export function LottieStep3() {
  return (
    <S.Step234Wrapper>
      <Lottie animationData={RawLottieStep3} />
    </S.Step234Wrapper>
  );
}

export function LottieStep4() {
  return (
    <S.Step234Wrapper>
      <Lottie animationData={RawLottieStep4} />
    </S.Step234Wrapper>
  );
}
