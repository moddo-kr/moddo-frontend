import { CharacterData } from '@/entities/character/model/character.type';
import axiosInstance from '@/shared/api/axios';

const image = {
  // GET GetCharacter
  getCharacter: (groupToken: string): Promise<CharacterData> =>
    axiosInstance
      .get('/character', { params: { code: groupToken } })
      .then((res) => res.data),
};

export default image;
