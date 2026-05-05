import { ReactNode } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getToken } from '@/shared/design-system';
import * as S from './CurvedProgressBar.styles';

interface CurvedProgressBarProps {
  progress: number;
  children?: ReactNode;
}

function CurvedProgressBar({ progress, children }: CurvedProgressBarProps) {
  return (
    <S.Container>
      <S.ArcWrapper>
        <CircularProgressbarWithChildren
          value={progress}
          circleRatio={0.5}
          strokeWidth={11.5}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: 'round',
            trailColor: getToken('fill.alternative'),
            pathColor: getToken('fill.primary.normal'),
          })}
        >
          {children}
        </CircularProgressbarWithChildren>
      </S.ArcWrapper>
      <S.CrownIcon $completed={progress === 100} />
    </S.Container>
  );
}

export { CurvedProgressBar };
export type { CurvedProgressBarProps };
