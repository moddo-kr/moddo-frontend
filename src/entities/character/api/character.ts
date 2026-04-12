import axiosInstance from '@/shared/api/axios';
import {
  CharacterItemData,
  CharacterItemsRawResponse,
} from '../model/character.type';

export const getCharacterCollection = (): Promise<CharacterItemData[]> =>
  axiosInstance.get<CharacterItemsRawResponse>('/collections').then((res) =>
    res.data.collections.map((item) => ({
      ...item,
      acquiredAt: item.acquiredAt ? new Date(item.acquiredAt) : null,
    }))
  );
