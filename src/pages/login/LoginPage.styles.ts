import styled from 'styled-components';

export const LogoImg = styled.img`
  width: 44%;
  max-width: 12.625rem;
  height: 4.125rem;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[12]};
  width: 100%;
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[32]} ${theme.unit[20]}`};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[12]}`};
`;

export const BottomWrapper = styled.footer`
  position: fixed;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // 12px
  padding: 0 1.25rem; // 20px
  width: 100%;
  max-width: 600px;
  min-width: 320px;
`;
