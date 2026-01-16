import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { useLoaderData } from 'react-router';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import { showToast } from '@/shared/ui/Toast';
import Text from '@/shared/ui/Text';
import { Download } from '@/shared/assets/svgs/icon';
import {
  CHARACTER_DESCRIPTION,
  CHARACTER_IMAGE_SIZE,
} from '@/entities/character/config/character';
import StarChip from '@/features/character-management/ui/StarChip';
import useGetCharacterSuspense from '@/features/character-management/api/useGetCharacterSuspense';
import Button from '@/shared/ui/Button';
import * as S from './index.styles';

function CharacterContent() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { groupToken } = useLoaderData();
  const { data } = useGetCharacterSuspense(groupToken);
  const { unit } = useTheme();

  const handleDownload = () => {
    if (!data) return;
    // 돔 요소를 이미지로 변환
    if (imageRef.current) {
      // 390x390 사이즈로 이미지 다운로드
      toPng(imageRef.current, { width: 390, height: 390 })
        .then((dataUrl) => {
          // 이미지 다운로드
          saveAs(dataUrl, `${data.name}.png`);
          showToast({
            type: 'success',
            content: '이미지 저장 완료!',
          });
        })
        .catch(() => {
          showToast({
            type: 'error',
            content: '이미지 저장 실패!',
          });
        });
    }
  };

  return (
    <S.CharacterContainer>
      <S.TitleContainer>
        <Text variant="heading1">캐릭터를 획득했어요!</Text>
      </S.TitleContainer>
      <S.CharacterCardContainer ref={imageRef}>
        <S.CharacterCard>
          <StarChip star={data.rarity} />
          <S.CharacterImageContainer>
            <img
              src={data.imageBigUrl}
              alt={data.name}
              style={{
                ...CHARACTER_IMAGE_SIZE[data.name].big,
              }}
            />
          </S.CharacterImageContainer>
          <Text variant="heading2" color="semantic.text.strong">
            {data.name}
          </Text>
          <Text variant="body1R" color="semantic.text.subtle">
            {CHARACTER_DESCRIPTION[data.name]}
          </Text>
        </S.CharacterCard>
      </S.CharacterCardContainer>
      <Button
        variant="text"
        onClick={handleDownload}
        style={{ marginBottom: unit[20] }}
      >
        <Download width={unit[20]} />
        <Text>이미지 저장</Text>
      </Button>
    </S.CharacterContainer>
  );
}

export default CharacterContent;
