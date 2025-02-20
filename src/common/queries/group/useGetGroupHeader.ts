import { getGroupHeader } from '@/service/apis/group';
import { useQuery } from '@tanstack/react-query';

export const useGetGroupHeader = (groupId: string) => {
  return useQuery({
    queryKey: ['groupHeader', groupId],
    queryFn: () => getGroupHeader(groupId),
  });
};
