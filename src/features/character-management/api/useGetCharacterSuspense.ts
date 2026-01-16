import { useSuspenseQuery } from '@tanstack/react-query';
import image from '@/entities/character/api/image';

const useGetCharacterSuspense = (groupToken: string) => {
  return useSuspenseQuery({
    queryKey: ['randomCharacter', groupToken],
    queryFn: () => image.getCharacter(groupToken),
  });
};

export default useGetCharacterSuspense;
