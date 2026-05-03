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
`;

export const LogoImg = styled.img`
  width: 44%;
  max-width: 12.625rem;
  height: 4.125rem;
  object-fit: contain;
`;
