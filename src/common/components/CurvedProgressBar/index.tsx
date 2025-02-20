import { ReactNode } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from 'styled-components';
import ChangingProgressProvider from '@/common/utils/ChangingProgressProvider';
import * as S from './index.style';

interface CurvedProgressBarProps {
  percentage: number;
  children?: ReactNode;
}

function CurvedProgressBar({ percentage, children }: CurvedProgressBarProps) {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <ChangingProgressProvider values={[0, percentage]}>
        {(value) => (
          <CircularProgressbarWithChildren
            value={value}
            circleRatio={0.5}
            strokeWidth={11}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 4,
              strokeLinecap: 'round',
              trailColor: `${theme.color.semantic.secondary.strong}`,
              pathColor: `${theme.color.semantic.orange.default}`,
            })}
          >
            {children}
          </CircularProgressbarWithChildren>
        )}
      </ChangingProgressProvider>
    </S.Wrapper>
  );
}

export default CurvedProgressBar;
