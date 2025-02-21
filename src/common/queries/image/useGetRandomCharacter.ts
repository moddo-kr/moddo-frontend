import { useQuery } from '@tanstack/react-query';
import image from '@/service/apis/image';

// TODO : 그룹 토큰 추가
const useGetRandomCharacter = () => {
  return useQuery({
    queryKey: ['randomCharacter'],
    queryFn: () => image.getRandomCharacter(),
  });
};

export default useGetRandomCharacter;
