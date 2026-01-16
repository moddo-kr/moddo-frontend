// shared/hooks/useSuspenseQueryWithHandlers.ts
import {
  QueryFunction,
  QueryFunctionContext,
  QueryKey,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import { ErrorHandlers } from '@/shared/types/error.type';
import { isAxiosError } from 'axios';

type UseSuspenseQueryWithHandlersOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryFn'
> & {
  queryFn: QueryFunction<TQueryFnData, TQueryKey>; // 필수로 재정의하기 위함
  errorHandlers?: ErrorHandlers;
};

const useSuspenseQueryWithHandlers = <
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseSuspenseQueryWithHandlersOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >
) => {
  const { queryFn, errorHandlers = {}, ...restOptions } = options;

  // queryFn을 감싸서 에러 변환
  const wrappedQueryFn = async (context: QueryFunctionContext<TQueryKey>) => {
    try {
      return await queryFn(context);
    } catch (error) {
      if (isAxiosError(error)) {
        const status = error.response?.status;

        if (status && errorHandlers[status]) {
          errorHandlers[status]();
        }
      }
      throw error;
    }
  };

  return useSuspenseQuery({
    ...restOptions,
    queryFn: wrappedQueryFn,
  });
};

export default useSuspenseQueryWithHandlers;
