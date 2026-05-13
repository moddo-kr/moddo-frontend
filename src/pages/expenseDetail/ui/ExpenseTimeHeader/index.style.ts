import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${getToken('bg.neutral')};
  padding-top: 0.375rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  padding-bottom: 3rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
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
  margin-bottom: 1.25rem;
  contain: content;
  cursor: pointer;
`;

export const ExpenseChip = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  background: ${getToken('fill.inverse.neutral')};
  border-radius: ${getToken('radius.full')};
  padding: ${getToken('padding.4')} ${getToken('padding.6')};
`;

export const TotalMoney = styled.span`
  position: absolute;
  color: ${getToken('fg.primary.normal')};
  ${applyTypography('typography.body.small-semibold')};
  right: -7%;
  top: 57.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeBox = styled.div`
  background: ${getToken('fill.normal')};
  border-radius: 1.25rem /* HACK: 토큰에 없는 border-radius 값 */;
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
  color: ${getToken('fg.normal')};
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

export const SettlementStatusText = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.inverse.normal')};
`;

export const PaidMemberCount = styled.span`
  color: ${getToken('fg.primary.normal')};
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

export const DescriptionTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
`;

export const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${getToken('padding.6')};
  gap: ${getToken('gap.5')};
`;

export const Bubble = styled.div`
  position: absolute;
  height: 2.5rem;
  top: 10%;
  background: ${getToken('fill.inverse.alternative')};
  border-radius: ${getToken('radius.lg')};
  color: ${getToken('fg.inverse.normal')};
  ${applyTypography('typography.body.medium-semibold')};
  padding: 0.625rem /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
    ${getToken('padding.4')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px; /* 꼬리가 말풍선 아래에 위치하도록 */
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.875rem 0.625rem 0;
    border-style: solid;
    border-color: ${getToken('fill.inverse.alternative')} transparent
      transparent;
  }
`;
