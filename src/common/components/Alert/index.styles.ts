import styled from 'styled-components';
import { AlertType, AlertVariant } from './index.type';

interface StyledAlertWrapperProps {
  $type: AlertType;
  $variant: AlertVariant;
}

export const AlertWrapper = styled.div<StyledAlertWrapperProps>`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => `0.8125rem ${theme.unit[10]}`};
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme, $type, $variant }) =>
    $variant === 'colored'
      ? theme.color.semantic.background.state[$type]
      : theme.color.primitive.base.white};
`;
