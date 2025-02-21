import styled from 'styled-components';

export const TitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 10.5dvh;
`;

export const LoginImg = styled.img`
  width: 62vw;
  min-width: 240px;
  max-width: 360px;
  @media (min-height: 746px) {
    width: 36dvh;
  }
  height: auto;
  object-fit: contain;
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

export const BottomButton = styled.button<{
  $bgColor?: string;
  color?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgColor }) => $bgColor || 'black'};
  color: ${({ color }) => color || 'black'};
  font-weight: 600;
  border-radius: 9999px;
  padding: 1rem 0.875rem; // 16px 14px
  /* height: fit-content; */
  /* height: 100px; */
  width: 100%;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.1s;
  }
`;

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
