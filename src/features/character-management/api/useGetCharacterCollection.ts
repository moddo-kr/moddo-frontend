import { getCharacterCollection } from '@/entities/character/api/character';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetCharacterCollection = () =>
  useSuspenseQuery({
    queryKey: ['characters'],
    queryFn: getCharacterCollection,
    // 획득한 캐릭터가 가장 앞에 오도록 정렬
    select: (data) =>
      [...data.characters].sort((a, b) => {
        if (a.isUnlocked === b.isUnlocked) return 0;
        return a.isUnlocked ? -1 : 1;
      }),
  });

export default useGetCharacterCollection;
