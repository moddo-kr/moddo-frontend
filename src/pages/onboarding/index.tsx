import { useState } from 'react';
import Button from '@/common/components/Button';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';
import { ActivePicker, DefaultPicker } from '@/assets/svgs/icon';
import theme from '@/styles/theme';
import Text from '@/common/components/Text';
import {
  OnboardingLottie1,
  OnboardingLottie2,
  OnboardingLottie3,
  OnboardingLottie4,
} from '@/common/components/Lottie';
import Header from '@/common/components/Header';
import Onboarding1 from '@/assets/pngs/Onboarding1.png';
import * as S from './index.style';

function Onboarding() {
  const [step, setStep] = useState<number>(0);
  const navigate = useNavigate();

  const handleNextClicked = () => {
    if (step < 3) setStep(step + 1);
    else navigate(ROUTE.home);
  };

  return (
    <>
      <Header
        type="TitleCenter"
        rightButtonContent={
          <Text variant="body1R" color="semantic.text.subtle">
            건너뛰기
          </Text>
        }
        rightButtonOnClick={() => navigate(ROUTE.home)}
        bgColor={theme.color.semantic.orange.subtle}
      />
      <S.Wrapper>
        {step === 0 && (
          <S.Container>
            <S.TextWrapper>
              <S.TitleTextWrapper>
                <Text variant="heading1" color="semantic.text.strong">
                  오늘부터 정산왕 모또와 함께
                </Text>
                <Text variant="heading1" color="semantic.text.strong">
                  복잡한 정산 걱정을 덜어봐요
                </Text>
              </S.TitleTextWrapper>
              <Text variant="body1R" color="semantic.text.default">
                숫자에 강한 햄스터 모또에게 정산을 맡겨주세요!
              </Text>
            </S.TextWrapper>
            <S.OnboardingImgContainer>
              <OnboardingLottie1 />
              <S.OnboardingImg src={Onboarding1} alt="OnboardingImg1" />
            </S.OnboardingImgContainer>
          </S.Container>
        )}
        {step === 1 && (
          <S.Container2>
            <S.TextWrapper>
              <S.TitleTextWrapper>
                <Text variant="heading1" color="semantic.text.strong">
                  1차, 2차, 3차 참여자가
                </Text>
                <Text variant="heading1" color="semantic.text.strong">
                  달라도 정확하게
                </Text>
              </S.TitleTextWrapper>
              <Text variant="body1R" color="semantic.text.default">
                빠른 1/N 계산과 지출 내역 공유로 정산을 투명하게!
              </Text>
            </S.TextWrapper>
            <S.Onboarding2Container>
              <OnboardingLottie2 />
            </S.Onboarding2Container>
          </S.Container2>
        )}
        {step === 2 && (
          <S.Container2>
            <S.TextWrapper>
              <S.TitleTextWrapper>
                <Text variant="heading1" color="semantic.text.strong">
                  지출 내역을 입력 후
                </Text>
                <Text variant="heading1" color="semantic.text.strong">
                  참여자에게 링크를 보내주세요!
                </Text>
              </S.TitleTextWrapper>
              <Text variant="body1R" color="semantic.text.default">
                링크를 보낸 후 하루 안에 모두 송금을 완료해요!
              </Text>
            </S.TextWrapper>
            <S.Onboarding2Container>
              <OnboardingLottie3 />
            </S.Onboarding2Container>
          </S.Container2>
        )}
        {step === 3 && (
          <S.Container2>
            <S.TextWrapper>
              <S.TitleTextWrapper>
                <Text variant="heading1" color="semantic.text.strong">
                  정산을 완료할 때마다
                </Text>
                <Text variant="heading1" color="semantic.text.strong">
                  새로운 캐릭터를 얻을 수 있어요!
                </Text>
              </S.TitleTextWrapper>
              <Text variant="body1R" color="semantic.text.default">
                정산 완료 후 얻은 귀여운 캐릭터를 공유해보세요.
              </Text>
            </S.TextWrapper>
            <S.Onboarding2Container>
              <OnboardingLottie4 />
            </S.Onboarding2Container>
          </S.Container2>
        )}
        <S.BottomContainer step={step}>
          <S.StepIndicator>
            {/* eslint-disable */}
            {Array.from({ length: 4 }).map((_, index) =>
              step === index ? (
                <ActivePicker
                  key={index}
                  width={theme.unit[12]}
                  height={theme.unit[6]}
                />
              ) : (
                <DefaultPicker
                  key={index}
                  width={theme.unit[6]}
                  height={theme.unit[6]}
                />
              )
            )}
            {/* eslint-disable */}
          </S.StepIndicator>
          <Button onClick={handleNextClicked} style={{ width: '100%' }}>
            {step < 3 ? '다음' : '시작하기'}
          </Button>
        </S.BottomContainer>
      </S.Wrapper>
    </>
  );
}

export default Onboarding;
