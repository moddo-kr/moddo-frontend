import { CharacterData } from '@/common/types/character';
import axiosInstance from './axios';

const image = {
  // GET GetCharacter
  getCharacter: (groupToken: string): Promise<CharacterData> =>
    axiosInstance
      .get(`/character?groupToken=${groupToken}`)
      .then((res) => res.data),
};

export default image;
