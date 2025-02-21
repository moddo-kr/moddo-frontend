import styled from 'styled-components';
import { EntranceImg, ImgContainer } from '../auth/login/index.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.color.semantic.orange.subtle};
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
`;

export const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 28%;
`;

export const BottomContainer = styled.div<{ step: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.unit[24]};
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[16]} ${theme.unit[20]}`};
  width: 100%;
  background: ${({ theme }) => theme.color.semantic.orange.subtle};
  z-index: 100;
  padding-top: ${({ step }) => (step === 1 ? `1rem` : `3.625rem`)};
`;

export const OnboardingImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const OnboardingImg = styled.img`
  width: 75%;
  height: auto;
  margin-top: ${({ theme }) => theme.unit[8]};
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const Onboarding2Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -18%;
`;
