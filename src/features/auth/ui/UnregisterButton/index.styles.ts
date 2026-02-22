import styled from 'styled-components';
import { TextVariant } from '@/shared/ui/Text/index.styles';

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  ${TextVariant('body1R')};
`;
