import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
  padding-top: ${({ theme }) => theme.unit[6]};
  padding-bottom: ${({ theme }) => theme.unit[48]};
`;

export const ModdoButton = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModdoImage = styled.img`
  width: 47%;
  margin-top: 18%;
  margin-bottom: ${({ theme }) => theme.unit[20]};
  contain: content;
  cursor: pointer;
`;

export const ExpenseChip = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.semantic.primary.default};
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
`;

export const TotalMoney = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.color.semantic.orange.default};
  ${applyTypography('typography.body.small-semibold')};
  right: -7%;
  top: 57.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeBox = styled.div`
  background: ${({ theme }) => theme.color.primitive.base.white};
  border-radius: ${({ theme }) => theme.radius.large};
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Timer = styled.div`
  display: grid;
  width: 174px;
  grid-template-columns: repeat(5, auto);
  place-items: center;
`;

export const TimeSep = styled.span`
  color: ${({ theme }) => theme.color.semantic.secondary.strong};
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  width: 2.375rem;
`;

export const DeadlineDate = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.primary.normal')};
`;

export const SettlementPrompt = styled.span`
  ${applyTypography('typography.heading.small')};
`;

export const PaidMemberCount = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.primary.normal')};
`;

export const SettlementStatusText = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.inverse.normal')};
`;

export const DeadlineLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.normal')};
`;

export const TimerDigit = styled.span<{ $isFailure: boolean }>`
  ${applyTypography('typography.heading.medium')};
  color: ${({ $isFailure }) =>
    $isFailure ? getToken('fg.accent-red.normal') : getToken('fg.normal')};
`;

export const TimerUnit = styled.span<{ $gridColumn: number }>`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  grid-column: ${({ $gridColumn }) => $gridColumn};
`;

export const Bubble = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.unit[40]};
  top: 10%;
  background: ${({ theme }) => theme.color.semantic.icon.subtle};
  border-radius: ${({ theme }) => theme.radius.default};
  color: ${({ theme }) => theme.color.semantic.text.inverse};
  ${applyTypography('typography.body.medium-semibold')};
  padding: ${({ theme }) => `${theme.unit[10]} ${theme.unit[12]}`};
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px; /* 꼬리가 말풍선 아래에 위치하도록 */
    left: 50%;
    transform: translateX(-50%);
    border-width: ${({ theme }) => `${theme.unit[14]} ${theme.unit[10]} 0`};
    border-style: solid;
    border-color: ${({ theme }) => theme.color.semantic.icon.subtle} transparent
      transparent;
  }
`;
