import group from '@/service/apis/group';
import useQueryWithHandlers from '@/common/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/common/types/error.type';

const useGetGroupBasicInfo = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  return useQueryWithHandlers({
    queryKey: ['groupBasicInfo', groupToken],
    queryFn: () => group.get(groupToken),
    errorHandlers,
    ignoreBoundaryErrors,
  });
};

export default useGetGroupBasicInfo;
