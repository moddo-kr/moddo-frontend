import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const MemberCount = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  ${applyTypography('typography.body.medium-semibold')}
`;

export const MemberCountHighlight = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.primary.normal')};
`;

export const AddMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const MemberListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  margin-top: 1.75rem;
`;

export const MemberChipList = styled.div`
  display: flex;
  gap: ${getToken('gap.7')};
  flex-wrap: nowrap;
  overflow-x: auto;
  > * {
    flex: 0 0 auto;
  }
`;
