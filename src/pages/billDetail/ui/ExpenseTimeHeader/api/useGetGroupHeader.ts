import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import { getGroupHeader } from '@/service/apis/group';

export const useGetGroupHeader = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  return useQueryWithHandlers({
    queryKey: ['groupHeader', groupToken],
    queryFn: () => getGroupHeader(groupToken),
    errorHandlers,
    ignoreBoundaryErrors,
  });
};
