import styled from 'styled-components';

export const ShareItemButton = styled.button`
  display: flex;
  padding: 0.5rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

// NOTE : 임시 아이콘
export const ShareItemIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 62.4375rem;
  background: #e6e6e6;
`;

export const ShareItemText = styled.span`
  color: #191919;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5rem; /* 200% */
`;
