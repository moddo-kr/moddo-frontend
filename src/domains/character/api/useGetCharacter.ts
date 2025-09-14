import image from '@/domains/sharing/api/image';
import { useQuery } from '@tanstack/react-query';

const useGetCharacter = (groupToken: string) => {
  return useQuery({
    queryKey: ['randomCharacter', groupToken],
    queryFn: () => image.getCharacter(groupToken),
  });
};

export default useGetCharacter;
