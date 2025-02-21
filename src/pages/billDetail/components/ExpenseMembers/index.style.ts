import styled from 'styled-components';
import { ProfileImg as MemberProfileImg } from '../../../../common/components/MemberProfile/index.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[32]} ${theme.unit[20]}`};
  gap: ${({ theme }) => theme.unit[16]};
`;

export const Container = styled.div<{ isPaid: boolean }>`
  padding: ${({ theme }) => theme.unit[20]};
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, isPaid }) =>
    isPaid
      ? theme.color.semantic.orange.subtle
      : theme.color.semantic.background.normal.alternative};
  border-radius: ${({ theme }) => theme.radius.large};
  height: fit-content;
  flex: 1;
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: none;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const ProfileImg = styled(MemberProfileImg)`
  width: ${({ theme }) => theme.unit[48]};
  height: ${({ theme }) => theme.unit[48]};
`;

export const SubProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[2]};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
`;

export const StatusChipButton = styled.button`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const DetailContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[12]};
  /** CSS 전환 효과 */
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out,
    padding-top 0.2s ease-in-out;
  padding: ${({ theme }) => `0 ${theme.unit[12]}`};
  padding-top: ${({ theme, isOpen }) => (isOpen ? theme.unit[12] : '0')};
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[20]};
  align-items: center;
`;
