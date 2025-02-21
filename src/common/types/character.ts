export type CharacterType =
  | 'angel'
  | 'lucky'
  | 'strawberry'
  | 'sleep'
  | 'magic';

export interface CharacterData {
  name: CharacterType;
  rarity: number;
  imageUrl: string;
  imageBigUrl: string;
}
