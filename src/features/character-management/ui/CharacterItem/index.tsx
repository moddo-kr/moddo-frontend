import { format } from 'date-fns';
import { CharacterItemData } from '@/entities/character/model/character.type';
import { Certified } from '@/shared/assets/svgs/icon';
import * as S from './index.styles';

function LockedCharacterCard() {
  return (
    <S.LockedCharacterCard aria-label="잠긴 캐릭터">
      {/* HACK: gray.90(#c7c9cb)에 대응하는 아이콘용 semantic 토큰 없음 */}
      <Certified width={62} color="#c7c9cb" />
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
      <S.CharacterName>{name}</S.CharacterName>
      <S.CharacterAcquiredDate>
        {acquiredAt ? format(acquiredAt, 'yyyy.MM.dd') : null}
      </S.CharacterAcquiredDate>
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
