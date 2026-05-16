import { ReactNode } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getToken } from '@/shared/design-system';
import ChangingProgressProvider from './ChangingProgressProvider';
import * as S from './CurvedProgressBar.styles';

interface CurvedProgressBarProps {
  percentage: number;
  children?: ReactNode;
}

function CurvedProgressBar({ percentage, children }: CurvedProgressBarProps) {
  const progress = Number.isFinite(percentage)
    ? Math.min(100, Math.max(0, percentage))
    : 0;

  return (
    <S.Container>
      <S.ArcWrapper>
        <ChangingProgressProvider values={[0, progress]}>
          {(value) => (
            <CircularProgressbarWithChildren
              value={value}
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
          )}
        </ChangingProgressProvider>
      </S.ArcWrapper>
      <S.CrownIcon $completed={progress === 100} />
    </S.Container>
  );
}

export { CurvedProgressBar };
export type { CurvedProgressBarProps };
