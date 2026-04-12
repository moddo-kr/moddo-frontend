import { getCharacterCollection } from '@/entities/character/api/character';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetCharacterCollection = () =>
  useSuspenseQuery({
    queryKey: ['characters'],
    queryFn: getCharacterCollection,
    // 획득한 캐릭터가 가장 앞에 오도록 정렬
    select: (data) =>
      [...data.collections].sort((a, b) => {
        if ((a.acquiredAt !== null) === (b.acquiredAt !== null)) return 0;
        return a.acquiredAt !== null ? -1 : 1;
      }),
  });

export default useGetCharacterCollection;
