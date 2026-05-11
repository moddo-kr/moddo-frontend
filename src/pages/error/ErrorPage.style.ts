import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const ErrorHamster = styled.img`
  width: 14.875rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.unit[16]};
  flex: 1;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const ErrorTitle = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.neutral')};
`;

export const SubText = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  text-align: center;
  white-space: pre-line;
`;
