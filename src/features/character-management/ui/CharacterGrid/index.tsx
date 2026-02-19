import { useGetCharacterCollection } from '@/features/character-management/api/index';
import CharacterItem from '../CharacterItem';
import * as S from './index.styles';

function CharacterList() {
  const { data: characterCollection } = useGetCharacterCollection();

  return (
    <S.CharacterList>
      {characterCollection.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </S.CharacterList>
  );
}

export default CharacterList;
