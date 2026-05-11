import { HTMLAttributes } from 'react';
import * as S from './PageLayout.styles';

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  $bg?: 'normal' | 'neutral';
}

function PageLayout({ $bg, ...props }: PageLayoutProps) {
  return <S.PageLayout $bg={$bg} {...props} />;
}

export { PageLayout };
export type { PageLayoutProps };
