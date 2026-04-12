import axiosInstance from '@/shared/api/axios';
import { parseDate } from '@/shared/lib/parseDate';
import {
  CharacterItemData,
  CharacterItemsRawResponse,
} from '../model/character.type';

export const getCharacterCollection = (): Promise<CharacterItemData[]> =>
  axiosInstance.get<CharacterItemsRawResponse>('/collections').then((res) =>
    res.data.collections.map((item) => ({
      ...item,
      acquiredAt: parseDate(item.acquiredAt),
    }))
  );
