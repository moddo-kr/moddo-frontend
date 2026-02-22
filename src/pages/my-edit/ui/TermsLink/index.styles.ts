import styled from 'styled-components';
import { TextVariant } from '@/shared/ui/Text/index.styles';

export const Link = styled.a`
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  ${TextVariant('body1R')};
`;
