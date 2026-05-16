import { HTMLAttributes } from 'react';
import * as S from './PageLayout.styles';

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  $bg?: 'normal' | 'neutral';
  $hasBottomFixedAction?: boolean;
}

function PageLayout({
  $bg,
  $hasBottomFixedAction = false,
  ...props
}: PageLayoutProps) {
  return (
    <S.PageLayout
      $bg={$bg}
      $hasBottomFixedAction={$hasBottomFixedAction}
      {...props}
    />
  );
}

export { PageLayout };
export type { PageLayoutProps };
