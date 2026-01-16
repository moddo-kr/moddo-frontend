import { ErrorHandlers } from '@/shared/types/error.type';
import { getGroupHeader } from '@/entities/group/api/group';
import useSuspenseQueryWithHandlers from '@/shared/hooks/useSuspenseQueryWithHandlers';

export const useGetGroupHeaderSuspense = (
  groupToken: string,
  errorHandlers: ErrorHandlers
) => {
  return useSuspenseQueryWithHandlers({
    queryKey: ['groupHeader', groupToken],
    queryFn: () => getGroupHeader(groupToken),
    errorHandlers,
  });
};
