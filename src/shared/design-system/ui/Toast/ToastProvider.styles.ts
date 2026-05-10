import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: fit-content;
    padding: 0;
    bottom: 4.5rem; /* 72px */
  }
  .Toastify__toast {
    display: flex;
    justify-content: center;
    background: transparent;
    box-shadow: none;
    padding: 0;
    min-height: unset;
    margin-bottom: 0;
  }
  .Toastify__toast-body {
    padding: 0;
    margin: 0;
  }
`;
