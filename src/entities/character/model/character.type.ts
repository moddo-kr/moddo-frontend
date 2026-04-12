export type CharacterType =
  | '천사 모또'
  | '러키 모또'
  | '딸기 또또'
  | '잠꾸러기 또또'
  | '마법사 또또';

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
