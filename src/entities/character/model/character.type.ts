import { CHARACTER_DATA } from '@/entities/character/config/character';

// 새 캐릭터 추가 시 CHARACTER_DATA에만 추가하면 타입이 자동으로 확장됨
export type CharacterType = keyof typeof CHARACTER_DATA;

export interface CharacterData {
  name: CharacterType;
  rarity: number;
  imageUrl: string;
  imageBigUrl: string;
}

export interface CharacterItemData extends CharacterData {
  id: number;
  acquiredAt: Date | null;
}

// API 원시 응답 타입 (JSON 파싱 직후, 변환 전)
interface CharacterItemRaw extends CharacterData {
  id: number;
  acquiredAt: string | null;
}

export interface CharacterItemsResponse {
  collections: CharacterItemData[];
}

export interface CharacterItemsRawResponse {
  collections: CharacterItemRaw[];
}
