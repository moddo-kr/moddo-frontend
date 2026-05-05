import { CharacterData } from '@/entities/character/model/character.type';
import axiosInstance from '@/shared/api/axios';

const image = {
  // GET GetCharacter
  getCharacter: (groupToken: string): Promise<CharacterData> =>
    axiosInstance
      .get(`/groups/${groupToken}/character`)
      .then((res) => res.data),
};

export default image;
