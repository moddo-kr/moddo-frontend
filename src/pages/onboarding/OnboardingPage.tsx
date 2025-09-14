import Button from '@/shared/ui/Button';
import { ROUTE } from '@/shared/config/route';
import { useNavigate } from 'react-router';
import theme from '@/shared/styles/theme';
import Text from '@/shared/ui/Text';
import {
  OnboardingStep1Lottie,
  OnboardingStep2Lottie,
  OnboardingStep3Lottie,
  OnboardingStep4Lottie,
} from '@/shared/ui/Lottie';
import Header from '@/shared/ui/Header';
import Onboarding1 from '@/shared/assets/pngs/Onboarding1.png';
/** swiper 관련 파일 */
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './OnboardingPage.style';

function OnboardingPage() {
  const navigate = useNavigate();
  /** 디바이스 크기가 태블릿 이하(768px)일 경우 swipe 가능 */
  const isSwipeDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  return (
    <>
      <Header type="TitleCenter" bgColor={theme.color.semantic.orange.subtle} />
      <S.Wrapper>
        <S.CustomSwiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          navigation={!isSwipeDevice}
          pagination
          allowTouchMove={isSwipeDevice}
        >
          <SwiperSlide>
            <S.Container gap="28%">
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
              <S.OnboardingContainer>
                <OnboardingStep1Lottie />
                <S.OnboardingImg src={Onboarding1} alt="OnboardingImg1" />
              </S.OnboardingContainer>
            </S.Container>
          </SwiperSlide>
          <SwiperSlide>
            <S.Container>
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
              <S.ExtendedOnboardingContainer>
                <OnboardingStep2Lottie />
              </S.ExtendedOnboardingContainer>
            </S.Container>
          </SwiperSlide>
          <SwiperSlide>
            <S.Container>
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
              <S.ExtendedOnboardingContainer>
                <OnboardingStep3Lottie />
              </S.ExtendedOnboardingContainer>
            </S.Container>
          </SwiperSlide>
          <SwiperSlide>
            <S.Container>
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
              <S.ExtendedOnboardingContainer>
                <OnboardingStep4Lottie />
              </S.ExtendedOnboardingContainer>
            </S.Container>
          </SwiperSlide>
        </S.CustomSwiper>
        <S.BottomContainer>
          <Button
            onClick={() => navigate(ROUTE.home)}
            style={{ width: '100%' }}
          >
            시작하기
          </Button>
        </S.BottomContainer>
      </S.Wrapper>
    </>
  );
}

export default OnboardingPage;
