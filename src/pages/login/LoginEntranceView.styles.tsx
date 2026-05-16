import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

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

export const EntranceTagline = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const EntranceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getToken('fill.primary.assistive')};
  flex-grow: 1;
  gap: ${getToken('gap.6')};
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    fill: ${getToken('fg.primary.normal')};
  }
`;
