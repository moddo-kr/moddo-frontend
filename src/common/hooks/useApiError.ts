import { useCallback, useMemo } from 'react';
import { isAxiosError } from 'axios';

type DefaultHandlerType = {
  [key: number]: () => void;
} & {
  default: () => void;
};

type HandlerType = Partial<DefaultHandlerType>;

const defaultHandlers: DefaultHandlerType = {
  // 기본 설정의 throwOnError 옵션을 true로 설정했으므로 기본적으로 useApiError의 핸들러에서는 아무것도 하지 않습니다.
  default: () => {},
};

/**
 * API 에러를 처리하는 커스텀 훅입니다.
 * @param customHandlers - 훅을 사용하는 곳에서 정의한 에러 핸들러
 * @param nonBoundaryErrors - ErrorBoundary를 사용하지 않는 에러코드
 * @description
 * 핸들러의 적용 순위는 customHandlers -> defaultHandlers입니다.
 * customHandlers에서 정의한 핸들러가 없을 경우 defaultHandlers의 핸들러가 호출됩니다.
 */
const useApiError = <TError = Error>({
  customHandlers,
  nonBoundaryErrors,
}: {
  customHandlers?: HandlerType;
  nonBoundaryErrors?: number[];
}) => {
  const handlers = useMemo(
    () => ({ ...defaultHandlers, ...customHandlers }),
    [customHandlers]
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

  // nonBoundaryErrors에 포함된 에러코드인지 확인합니다.
  // 해당 함수가 true를 반환하면 ErrorBoundary에서 에러를 처리합니다.
  // 기본값은 true입니다.
  const isBoundaryError = useCallback(
    (error: TError) => {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        if (status) {
          return !nonBoundaryErrors?.includes(status);
        }
      }
      return true;
    },
    [nonBoundaryErrors]
  );

  return { handleError, isBoundaryError };
};

export default useApiError;
