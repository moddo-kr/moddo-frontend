import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.color.semantic.primary.subtle};
  overflow: hidden;
`;

export const StepIndicator = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[8]};
  width: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.unit[14]};
  padding: ${({ theme }) => `${theme.unit[10]} ${theme.unit[20]}`};
  gap: ${({ theme }) => theme.unit[4]};
  white-space: nowrap;
`;

export const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: ${({ gap }) => gap || '0'};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.unit[24]};
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[16]} ${theme.unit[20]}`};
  width: 100%;
  background: ${({ theme }) => theme.color.semantic.primary.subtle};
  z-index: 100;
  padding-top: 1rem;
`;

export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  position: relative;
`;

export const OnboardingImg = styled.img`
  width: 70%;
  height: auto;
  margin-top: ${({ theme }) => theme.unit[8]};
`;

export const ExtendedOnboardingContainer = styled(OnboardingContainer)`
  width: 83%;
  height: 100%;
  top: -18%;
`;

export const CustomSwiper = styled(Swiper)`
  --swiper-navigation-size: ${({ theme }) => theme.unit[40]};
  --swiper-theme-color: ${({ theme }) => theme.color.semantic.primary.default};

  display: flex;
  max-width: 37.5rem;
  flex-direction: column;
  flex: 1;
  width: 100%;

  .swiper-slide {
    display: flex;
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin: 0 10px;
  }

  .swiper-pagination-bullet-active {
    width: ${({ theme }) => theme.unit[16]};
    border-radius: ${({ theme }) => theme.radius.default};
  }
`;
