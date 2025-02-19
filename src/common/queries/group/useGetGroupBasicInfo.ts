import { useQuery } from '@tanstack/react-query';
import group from '@/service/apis/group';

const useGetGroupBasicInfo = (groupToken: string) => {
  return useQuery({
    queryKey: ['groupBasicInfo', groupToken],
    queryFn: () => group.get(groupToken),
  });
};

export default useGetGroupBasicInfo;
