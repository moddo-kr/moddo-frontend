import styled from 'styled-components';

export const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1.25rem; // 10px 20px
  margin-top: 3.5rem; // 56px
  width: 100%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 31.25rem; // 500px 
  height: fit-content;
  padding: 0 1.5rem; // 24px
  position: absolute;
  top: 33dvh;
`;

export const LogoImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
