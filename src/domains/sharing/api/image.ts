import { CharacterData } from '@/domains/character/model/character.type';
import axiosInstance from '@/service/apis/axios';

const image = {
  // GET GetCharacter
  getCharacter: (groupToken: string): Promise<CharacterData> =>
    axiosInstance
      .get(`/character?groupToken=${groupToken}`)
      .then((res) => res.data),
};

export default image;
