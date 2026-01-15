import { ComponentType, ReactNode, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import Loading from '@/shared/ui/Loading';
import DefaultErrorFallback from './ui/DefaultErrorFallback';

interface AsyncBoundaryProps {
  children: ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: ComponentType<FallbackProps>;
}

/**
 * 비동기 데이터 로딩을 위한 Suspense + ErrorBoundary 조합 컴포넌트
 *
 * - 초기 로딩: loadingFallback 렌더링
 * - 에러 발생: errorFallback 렌더링
 *
 * @example
 * <AsyncBoundary>
 *   <UserList />
 * </AsyncBoundary>
 */

function AsyncBoundary({
  children,
  loadingFallback = <Loading hideImage />,
  errorFallback = DefaultErrorFallback,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
