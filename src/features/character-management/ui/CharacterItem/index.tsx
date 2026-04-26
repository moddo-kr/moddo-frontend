import { format } from 'date-fns';
import { CharacterItemData } from '@/entities/character/model/character.type';
import { Certified } from '@/shared/assets/svgs/icon';
import Text from '@/shared/ui/Text';
import * as S from './index.styles';

function LockedCharacterCard() {
  return (
    <S.LockedCharacterCard aria-label="잠긴 캐릭터">
      <Certified width={62} />
    </S.LockedCharacterCard>
  );
}

interface CharacterCardProps {
  character: CharacterItemData;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { imageUrl, name, acquiredAt } = character;

  return (
    <S.CardContainer>
      <S.CharacterImage src={imageUrl} alt={name} />
      <Text variant="body2Sb">{name}</Text>
      <Text variant="caption">
        {acquiredAt ? format(acquiredAt, 'yyyy.MM.dd') : null}
      </Text>
    </S.CardContainer>
  );
}

interface CharacterItemProps {
  character: CharacterItemData;
}

function CharacterItem({ character }: CharacterItemProps) {
  if (!character.acquiredAt) return <LockedCharacterCard />;
  return <CharacterCard character={character} />;
}

export default CharacterItem;
