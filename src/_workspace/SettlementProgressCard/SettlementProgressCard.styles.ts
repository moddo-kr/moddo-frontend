import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* HACK: Figma gap 14px, 가장 가까운 gap.5(12px) 사용 */
  gap: ${getToken('gap.5')};
  width: 100%;
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.xl')};
  /* HACK: Figma py 18px, 가장 가까운 padding.6(20px) 사용 */
  padding: ${getToken('padding.6')};
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupName = styled.span`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.alternative')};
`;

export const Amount = styled.span`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.normal')};
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  overflow: hidden;
`;

export const ProgressTrack = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${getToken('radius.full')};
  background: ${getToken('fill.normal')};
`;

interface ProgressFillProps {
  $progress: number;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  border-radius: ${getToken('radius.full')};
  background: ${getToken('fill.primary.normal')};
`;

export const CountRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${getToken('gap.2')};
`;

export const CountGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const PaidCountText = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.primary.normal')};
`;

export const TotalCountText = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.assistive')};
`;
