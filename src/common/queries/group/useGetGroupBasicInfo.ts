import group from '@/service/apis/group';
import useQueryWithHandlers from '@/common/hooks/useQueryWithHandlers';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';

const useGetGroupBasicInfo = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  return useQueryWithHandlers({
    queryKey: ['groupBasicInfo', groupToken],
    queryFn: () => group.get(groupToken),
    errorHandlers,
    noBoundaryErrors,
  });
};

export default useGetGroupBasicInfo;
