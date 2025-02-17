import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Container = styled(ToastContainer)`
  .Toastify__toast {
    width: fit-content;
    height: ${({ theme }) => theme.unit[40]};
    min-height: ${({ theme }) => theme.unit[40]};
    font-size: ${({ theme }) => theme.typography.fontSize.body2R};
    color: ${({ theme }) => theme.color.primitive.base.white};
    border-radius: ${({ theme }) => theme.radius.circle};
    padding: ${({ theme }) =>
      `${theme.unit[16]} ${theme.unit[14]} ${theme.unit[16]} ${theme.unit[12]}`};
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.inverse};
    gap: ${({ theme }) => theme.unit[8]};
    bottom: ${({ theme }) => theme.unit[12]};
  }
  .Toastify__toast-icon {
    width: ${({ theme }) => theme.unit[20]};
    height: ${({ theme }) => theme.unit[20]};
    margin: 0;
  }
`;
