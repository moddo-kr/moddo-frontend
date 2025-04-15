import useQueryWithHandlers from '@/common/hooks/useQueryWithHandlers';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';
import { getGroupHeader } from '@/service/apis/group';

export const useGetGroupHeader = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  return useQueryWithHandlers({
    queryKey: ['groupHeader', groupToken],
    queryFn: () => getGroupHeader(groupToken),
    errorHandlers,
    noBoundaryErrors,
  });
};
