import styled from 'styled-components';
import { getToken } from '@/shared/design-system';
import SvgCrown from '@/shared/assets/svgs/icon/Crown';

export const Container = styled.div`
  position: relative;
  width: 272px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const ArcWrapper = styled.div`
  width: 100%;
`;

export const CrownIcon = styled(SvgCrown)<{ $completed: boolean }>`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 120px;
  right: 4px;
  color: ${({ $completed }) =>
    $completed ? getToken('fg.static-white') : getToken('fg.assistive')};
`;
