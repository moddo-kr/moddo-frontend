import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import { getGroupList } from './group';

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
