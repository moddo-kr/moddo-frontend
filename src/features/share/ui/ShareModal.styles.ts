import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const ShareModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* HACK: py 24px에 해당하는 padding 토큰 없음. gap.8(24px)을 임시 사용. */
  gap: ${getToken('gap.8')};
  background: ${getToken('bg.normal')};
  border-radius: ${getToken('radius.lg')};
  padding: ${getToken('gap.8')} ${getToken('padding.6')};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 330px;
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ModalHeading = styled.h2`
  ${applyTypography('typography.title.small')};
  color: ${getToken('fg.normal')};
  margin: 0;
`;

export const ShareItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.6')};
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${getToken('radius.full')};
  background-color: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.alternative')};
  cursor: pointer;
`;
