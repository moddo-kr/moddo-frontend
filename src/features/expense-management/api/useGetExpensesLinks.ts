import expense from '@/entities/expense/api/expense';
import useQueryWithHandlers from '@/shared/hooks/useQueryWithHandlers';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';

const useGetExpensesLinks = (
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  const query = useQueryWithHandlers({
    queryKey: ['expense-links'],
    queryFn: expense.getLinks,
    staleTime: 10 * 60 * 1000, // 10분
    gcTime: 60 * 60 * 1000, // 1시간
    errorHandlers,
    ignoreBoundaryErrors,
  });

  return query;
};

export default useGetExpensesLinks;
