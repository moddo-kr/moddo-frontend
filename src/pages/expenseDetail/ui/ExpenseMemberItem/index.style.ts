import styled from 'styled-components';
import { Accordion } from '@/shared/design-system/ui';
import { applyTypography, getToken } from '@/shared/design-system';

export const Container = styled(Accordion)<{ $isPaid: boolean }>`
  padding: ${getToken('padding.6')};
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ $isPaid }) =>
    $isPaid ? getToken('fill.primary.assistive') : getToken('bg.neutral')};
  border-radius: 1.25rem /* HACK: 토큰에 없는 border-radius 값 */;
  height: fit-content;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getToken('gap.2')};
  width: 100%;
`;

export const HeaderToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
`;

export const SubProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${getToken('gap.1')};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
`;

export const StatusChipButton = styled.button`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  z-index: 100;
  border: none;
  background: transparent;
  padding: 0;
`;

export const ChevronWrapper = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const ContentContainer = styled(Accordion.Content)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.5')};
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getToken('padding.4')} ${getToken('padding.4')} 0;
  gap: ${getToken('gap.4')};
`;

export const PlaceWrapper = styled.div`
  display: flex;
  gap: ${getToken('gap.4')};
  align-items: center;

  & > svg {
    flex-shrink: 0;
  }
`;

export const SheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  padding: 0 ${getToken('padding.6')} ${getToken('padding.5')};
`;

export const TextButtonWrapper = styled.button<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ $isActive }) =>
    $isActive
      ? getToken('fg.primary.normal')
      : getToken(
          'fill.normal-disable'
        )}; /* HACK: #ACAFB2로 정의된 토큰이 없어 의미상 유사한 토큰을 임의로 사용함 */
  > svg {
    display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  }
`;

export const MemberName = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  /* HACK: Figma --text/default(#444950 = gray.40)에 대응하는 token 없음, fg.neutral(gray.30) 사용 */
  color: ${getToken('fg.neutral')};
`;

export const MemberTotalAmount = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const ExpenseContent = styled.span`
  ${applyTypography('typography.body.medium')};
`;

export const ExpenseAmount = styled.span`
  word-break: keep-all;
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.neutral')};
`;

export const PaymentStatusLabel = styled.span`
  ${applyTypography('typography.title.small')};
`;
