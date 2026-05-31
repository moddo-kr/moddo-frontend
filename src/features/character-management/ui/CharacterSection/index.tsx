import { Suspense } from 'react';
import CharacterGrid from '../CharacterGrid';
import * as S from './index.styles';

function CharacterSection() {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.SectionTitle>캐릭터 도감</S.SectionTitle>
      </S.TitleWrapper>
      <Suspense fallback={<S.CharacterGrid>로딩 중...</S.CharacterGrid>}>
        <CharacterGrid />
      </Suspense>
    </S.Container>
  );
}

export default CharacterSection;
