export type StarCount = 1 | 2 | 3;

export interface CharacterData {
  name: string;
  rarity: StarCount;
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

export interface CharacterItemsRawResponse {
  collections: CharacterItemRaw[];
}
