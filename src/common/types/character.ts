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
