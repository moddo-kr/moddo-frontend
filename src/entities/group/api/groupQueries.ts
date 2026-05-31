import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import { getGroupDetail } from './group';

export const useGetGroupDetail = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  const query = useQueryWithHandlers({
    queryKey: ['groupDetail', groupToken],
    queryFn: () => getGroupDetail(groupToken),
    errorHandlers,
    ignoreBoundaryErrors,
  });
  return query;
};
