import { useQuery } from '@tanstack/react-query';
import { getSettlementList } from '@/entities/group/api/group';
import type {
  SettlementSort,
  SettlementStatus,
} from '@/entities/group/model/group.type';

const useGetSettlementList = (
  status: SettlementStatus,
  sort: SettlementSort
) => {
  return useQuery({
    queryKey: ['settlementList', status, sort],
    queryFn: () => getSettlementList(status, sort),
    throwOnError: false,
  });
};

export default useGetSettlementList;
