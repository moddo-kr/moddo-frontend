import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Hamster = styled.img`
  width: 14.875rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.6')};
  flex: 1;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.4')};
`;

export const NotFoundTitle = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.neutral')};
`;

export const NotFoundDescription = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  text-align: center;
`;
