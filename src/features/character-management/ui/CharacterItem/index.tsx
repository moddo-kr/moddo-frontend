import { format } from 'date-fns';
import { CharacterItemData } from '@/entities/character/model/character.type';
import { Certified } from '@/shared/assets/svgs/icon';
import * as S from './index.styles';

function LockedCharacterCard() {
  return (
    <S.LockedCharacterCard aria-label="잠긴 캐릭터">
      {/* HACK : 정의되지 않은 토큰이라 #D2D4D5를 그대로 사용 */}
      <Certified width={62} color="#D2D4D5" />
    </S.LockedCharacterCard>
  );
}

interface CharacterCardProps {
  character: CharacterItemData;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { imageBigUrl, name, acquiredAt } = character;

  return (
    <S.CardContainer>
      <S.CharacterImage src={imageBigUrl} alt={name} />
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
