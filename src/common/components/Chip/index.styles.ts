import styled from 'styled-components';

export const Chip = styled.span`
  display: flex;
  height: 2rem;
  padding: 0.3125rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 624.9375rem;
  background: #f1f3f5;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-left: 2px;
  width: 1rem;
  height: 1rem;
  color: #444950;
`;

export const ChipLabel = styled.span`
  color: #444950;
  font-size: 0.75rem;
  font-weight: 400;
`;
