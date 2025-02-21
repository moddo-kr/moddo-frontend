import { getGroupHeader } from '@/service/apis/group';
import { useQuery } from '@tanstack/react-query';

export const useGetGroupHeader = (groupToken: string) => {
  return useQuery({
    queryKey: ['groupHeader', groupToken],
    queryFn: () => getGroupHeader(groupToken),
  });
};
