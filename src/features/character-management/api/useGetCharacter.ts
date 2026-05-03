import image from '@/entities/character/api/image';
import { useQuery } from '@tanstack/react-query';

const useGetCharacter = (groupToken: string) => {
  return useQuery({
    queryKey: ['randomCharacter', groupToken],
    queryFn: () => image.getCharacter(groupToken),
    throwOnError: false,
    retry: false,
  });
};

export default useGetCharacter;
