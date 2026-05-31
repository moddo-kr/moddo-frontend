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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  margin-bottom: ${getToken('gap.6')};
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.1')};
  flex: 1;
  min-width: 0;
`;

export const InfoSubRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
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

export const KebabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: ${getToken('fg.neutral')};
  flex-shrink: 0;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${getToken('fill.normal-disable')};
  margin: 0 0 ${getToken('gap.6')};
`;

export const AccordionToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.2')};
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  width: 100%;
`;

export const AccordionToggleLabel = styled.span`
  ${applyTypography('typography.body.small-medium')};
  color: ${getToken('fg.alternative')};
`;

export const ChevronWrapper = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getToken('fg.alternative')};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const ContentContainer = styled(Accordion.Content)`
  width: 100%;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.5')};
  padding-top: ${getToken('gap.6')};
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceWrapper = styled.div`
  display: flex;
  gap: ${getToken('gap.4')};
  align-items: center;
  flex: 1;
  min-width: 0;
`;

export const ExpenseContent = styled.span`
  ${applyTypography('typography.body.medium')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ExpenseAmount = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.neutral')};
  flex-shrink: 0;
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

export const PaymentStatusLabel = styled.span`
  ${applyTypography('typography.title.small')};
`;
