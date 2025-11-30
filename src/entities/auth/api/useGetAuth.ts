import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import { getAuth } from './auth';

export const useGetAuth = (
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  return useQueryWithHandlers({
    queryKey: ['checkAuth'],
    queryFn: getAuth,
    errorHandlers,
    ignoreBoundaryErrors,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
