import styled from 'styled-components';
import { Link } from 'react-router';
import SvgSystemWarning from '@/shared/assets/svgs/icon/SystemWarning';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  /* HACK: Figma gap 14px, 가장 가까운 gap.5(12px) 사용 */
  gap: ${getToken('gap.5')};
  width: 100%;
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.xl')};
  /* HACK: Figma py 18px, 가장 가까운 padding.6(20px) 사용 */
  padding: ${getToken('padding.6')};
  text-decoration: none;
  color: inherit;
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
  /* 대응되는 시맨틱 토큰이 없어 Figma 지정값 사용 */
  background: #d6d6d6;
`;

export const MessageRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${getToken('gap.2')};
`;

export const WarningIcon = styled(SvgSystemWarning)`
  color: ${getToken('fg.accent-yellow.normal')};
`;

export const Message = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.assistive')};
`;
