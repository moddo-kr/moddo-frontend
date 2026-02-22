import axiosInstance from '@/shared/api/axios';
import { CharacterItemsResponse } from '../model/character.type';

export const getCharacterCollection = () =>
  axiosInstance
    .get<CharacterItemsResponse>('/character/collection', {
      useMock: true,
    })
    .then((res) => res.data);
