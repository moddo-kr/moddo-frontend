import { useQuery } from '@tanstack/react-query';
import image from '@/service/apis/image';

const useGetCharacter = (groupToken: string) => {
  return useQuery({
    queryKey: ['randomCharacter', groupToken],
    queryFn: () => image.getCharacter(groupToken),
  });
};

export default useGetCharacter;
