import styled from 'styled-components';

export const DraggableContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DraggableButton = styled.button`
  &:active {
    background-color: #f0f0f0;
  }
`;
