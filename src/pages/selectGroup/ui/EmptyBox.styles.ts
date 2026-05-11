import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const EmptyBox = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${getToken('bg.normal')};
  border-radius: ${getToken('radius.xl')};
  border: ${`1px dashed ${getToken('border.neutral')}`};
  padding: ${`${getToken('padding.5')} ${getToken('padding.6')}`};
`;

export const EmptyBoxMessage = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.alternative')};
`;

export const EmptyBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${getToken('gap.2')};
  svg {
    fill: ${getToken('fg.normal-disable')};
    opacity: 0.5;
  }
`;
