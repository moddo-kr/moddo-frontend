import group from '@/entities/group/api/group';
import { ErrorHandlers } from '@/shared/types/error.type';
import useSuspenseQueryWithHandlers from '@/shared/hooks/useSuspenseQueryWithHandlers';

const useGetGroupBasicInfoSuspense = (
  groupToken: string,
  errorHandlers: ErrorHandlers
) => {
  return useSuspenseQueryWithHandlers({
    queryKey: ['groupBasicInfo', groupToken],
    queryFn: () => group.get(groupToken),
    errorHandlers,
  });
};

export default useGetGroupBasicInfoSuspense;
