import { getGroupList } from '@/entities/group/api/group';
import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';

const useGetGroupLinks = (
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  const query = useQueryWithHandlers({
    queryKey: ['group-list'],
    queryFn: getGroupList,
    staleTime: 10 * 60 * 1000, // 10분
    gcTime: 60 * 60 * 1000, // 1시간
    errorHandlers,
    ignoreBoundaryErrors,
  });

  return query;
};

export default useGetGroupLinks;
