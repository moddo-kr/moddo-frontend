import { useEffect } from 'react';
import {
  QueryClient,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { ErrorHandler } from '@/common/types/error.type';
import useApiError from './useApiError';

type UseQueryWithHandlersOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  errorHandlers: ErrorHandler;
  noBoundaryErrors: number[];
};

const useQueryWithHandlers = <
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryWithHandlersOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
) => {
  const { errorHandlers, noBoundaryErrors, ...restOptions } = options;
  const { handleError, shouldThrowError } = useApiError<TError>({
    errorHandlers,
    noBoundaryErrors,
  });

  const query = useQuery(
    { ...restOptions, throwOnError: shouldThrowError },
    queryClient
  );

  useEffect(() => {
    if (query.error) {
      handleError(query.error);
    }
  }, [query.error, handleError]);

  return query;
};

export default useQueryWithHandlers;
