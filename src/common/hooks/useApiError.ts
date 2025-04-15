import { useCallback, useMemo } from 'react';
import { isAxiosError } from 'axios';
import { DefaultErrorHandler, ErrorHandler } from '@/common/types/error.type';

const defaultHandlers: DefaultErrorHandler = {
  // 기본 설정의 throwOnError 옵션을 true로 설정했으므로 기본적으로 useApiError의 핸들러에서는 아무것도 하지 않습니다.
  default: () => {},
};

/**
 * API 에러를 처리하는 커스텀 훅입니다.
 * @param errorHandlers - 훅을 사용하는 곳에서 정의한 에러 핸들러
 * @param noBoundaryErrors - ErrorBoundary를 사용하지 않는 에러코드
 * @description
 * 핸들러의 적용 순위는 errorHandlers -> defaultHandlers입니다.
 * errorHandlers에서 정의한 핸들러가 없을 경우 defaultHandlers의 핸들러가 호출됩니다.
 */
const useApiError = <TError = Error>({
  errorHandlers,
  noBoundaryErrors,
}: {
  errorHandlers?: ErrorHandler;
  noBoundaryErrors?: number[];
}) => {
  const handlers = useMemo(
    () => ({ ...defaultHandlers, ...errorHandlers }),
    [errorHandlers]
  );

  // customErrorHandler를 우선 처리하고, defaultHandler를 처리합니다.
  const handleError = useCallback(
    (error: TError) => {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        if (status) {
          const customHandler = handlers[status] || handlers.default;
          customHandler();
        } else {
          handlers.default();
        }
      } else {
        handlers.default();
      }
    },
    [handlers]
  );

  // noBoundaryErrors에 포함된 에러코드인지 확인합니다.
  // 해당 함수가 true를 반환하면 ErrorBoundary에서 에러를 처리합니다.
  // 기본값은 true입니다.
  const shouldThrowError = useCallback(
    (error: TError) => {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        if (status) {
          return !noBoundaryErrors?.includes(status);
        }
      }
      return true;
    },
    [noBoundaryErrors]
  );

  return { handleError, shouldThrowError };
};

export default useApiError;
