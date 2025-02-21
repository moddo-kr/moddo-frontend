import styled from 'styled-components';

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 330px;
`;

export const EntranceImg = styled.img`
  width: 60%;
  max-width: 17.25rem;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 33%;
`;

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
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[12]};
  width: 100%;
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[16]} ${theme.unit[20]}`};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[12]}`};
`;
