import axiosInstance from '@/shared/api/axios';
import {
  CharacterItemsRawResponse,
  CharacterItemsResponse,
} from '../model/character.type';

export const getCharacterCollection = (): Promise<CharacterItemsResponse> =>
  axiosInstance.get<CharacterItemsRawResponse>('/collections').then((res) => ({
    collections: res.data.collections.map((item) => ({
      ...item,
      acquiredAt: item.acquiredAt ? new Date(item.acquiredAt) : null,
    })),
  }));
