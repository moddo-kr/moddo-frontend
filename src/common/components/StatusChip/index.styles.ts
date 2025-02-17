import styled, { css } from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';
import { PaymentStatus } from './index.type';

const statusVariants = {
  paid: css`
    background: ${({ theme }) => theme.color.primitive.orange[100]};
    color: ${({ theme }) => theme.color.semantic.orange.default};
  `,
  unpaid: css`
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.disabled};
    color: ${({ theme }) => theme.color.semantic.text.subtle};
  `,
};

interface StyledStatusChipProps {
  $status: PaymentStatus;
}

export const StatusChip = styled.div<StyledStatusChipProps>`
  width: fit-content;
  padding: ${({ theme }) => `${theme.unit[4]} ${theme.unit[8]}`};
  border-radius: ${({ theme }) => theme.unit[6]};
  ${TextVariant('caption')};
  ${({ $status }) => statusVariants[$status]}
`;
