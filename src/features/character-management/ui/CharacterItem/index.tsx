import { format } from 'date-fns';
import { CharacterItemData } from '@/entities/character/model/character.type';
import { Certified } from '@/shared/assets/svgs/icon';
import Text from '@/shared/ui/Text';
import * as S from './index.styles';

function EmptyCharacterCard() {
  return (
    <S.EmptyCardContainer>
      <Certified width={62} />
    </S.EmptyCardContainer>
  );
}

interface CharacterCardProps {
  character: CharacterItemData;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { imageUrl, name, unlockedAt } = character;

  return (
    <S.CardContainer>
      <S.CharacterImage src={imageUrl} alt={name} />
      <Text variant="body2Sb">{name}</Text>
      <Text variant="caption">
        {unlockedAt ? format(new Date(unlockedAt), 'yyyy.MM.dd') : null}
      </Text>
    </S.CardContainer>
  );
}

interface CharacterItemProps {
  character: CharacterItemData;
}

function CharacterItem({ character }: CharacterItemProps) {
  if (!character.isUnlocked) return <EmptyCharacterCard />;
  return <CharacterCard character={character} />;
}

export default CharacterItem;
