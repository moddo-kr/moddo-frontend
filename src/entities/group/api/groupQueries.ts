import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import { getGroupDetail, getGroupList } from './group';

export const useGetGroupList = (
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  const query = useQueryWithHandlers({
    queryKey: ['groupList'],
    queryFn: getGroupList,
    errorHandlers,
    ignoreBoundaryErrors,
  });
  return query;
};

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
