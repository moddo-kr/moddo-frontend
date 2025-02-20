import { CharacterData } from '@/common/types/character';
import axiosInstance from './axios';

const image = {
  // GET GetCharacter
  // TODO : 그룹 토큰 추가
  getRandomCharacter: (): Promise<CharacterData> =>
    axiosInstance.get(`/images/character`).then((res) => res.data),
};

export default image;
