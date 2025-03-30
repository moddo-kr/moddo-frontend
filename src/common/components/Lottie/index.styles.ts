import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 32%;
  max-width: 9.125rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  z-index: 1000;
  position: absolute;
  top: 0;
`;

export const ExtendedWrapper = styled(Wrapper)`
  width: 100%;
  max-width: 100%;
  top: -70%;
`;

export const OnboardingWrapper = styled.div`
  position: absolute;
  width: 90%;
  top: 70%; 
  // 중앙 정렬 코드
  left: 50%; 
  transform: translate(-50%, -50%);
`;
