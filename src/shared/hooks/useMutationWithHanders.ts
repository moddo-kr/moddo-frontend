import {
  QueryClient,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';
import { ErrorHandlers } from '@/shared/types/error.type';
import useApiError from './useApiError';

type UseMutationWithHandlersOptions<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown,
> = UseMutationOptions<TData, TError, TVariables, TContext> & {
  errorHandlers: ErrorHandlers;
  ignoreBoundaryErrors: number[];
};

const useMutationWithHandlers = <
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationWithHandlersOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient
) => {
  const { errorHandlers, ignoreBoundaryErrors, ...restOptions } = options;
  const { handleError, shouldThrowError } = useApiError<TError>({
    errorHandlers,
    ignoreBoundaryErrors,
  });

  return useMutation(
    { ...restOptions, onError: handleError, throwOnError: shouldThrowError },
    queryClient
  );
};

export default useMutationWithHandlers;
