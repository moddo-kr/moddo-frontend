import styled from 'styled-components';

export const CalendarInput = styled.input`
  width: 100%;
  outline: none;
  &::placeholder {
    color: #6f7379;
    opacity: 0.5;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: var(--border-radius-default, 0.75rem);
  border: 1px solid var(--border-default, #d2d4d5);
  background: var(--background-normal-default, #fff);
  color: #444950;
`;
