import { Suspense } from 'react';
import Text from '@/shared/ui/Text';
import CharacterGrid from '../CharacterGrid';
import * as S from './index.styles';

function CharacterSection() {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text color="semantic.text.strong" variant="title">
          캐릭터 도감
        </Text>
      </S.TitleWrapper>
      <Suspense fallback={<S.CharacterGrid>로딩 중...</S.CharacterGrid>}>
        <CharacterGrid />
      </Suspense>
    </S.Container>
  );
}

export default CharacterSection;
