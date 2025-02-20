import { useRef } from 'react';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import { showToast } from '@/common/components/Toast';
import Button from '@/common/components/Button';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-absolute-path
import characterImageUrl from '/pngs/angle-moddo.png';
import { ArrowLeft } from '@/assets/svgs/icon';
import { CharacterData } from '@/common/types/character';
import {
  CHARACTER_NAME,
  CHARACTER_IMAGE_SIZE,
  CHARACTER_DESCRIPTION,
} from '@/common/constants/character';
import StarChip from '@/common/components/StarChip';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import useGetRandomCharacter from '@/common/queries/image/useGetRandomCharacter';
import * as S from './index.styles';

// const data: CharacterData = {
//   name: 'angel',
//   rarity: 2,
//   imageUrl: characterImageUrl,
//   imageBigUrl: characterImageUrl,
// };

function CharacterShare() {
  // const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetRandomCharacter();
  const navigate = useNavigate();
  const { unit } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    // 돔 요소를 이미지로 변환
    if (imageRef.current) {
      toPng(imageRef.current, { width: 440, height: 440 })
        .then((dataUrl) => {
          // 이미지 다운로드
          saveAs(dataUrl, `${data.name}.png`);
        })
        .catch(() => {
          showToast({
            type: 'error',
            content: 'QR코드 다운로드에 실패했어요.',
          });
        });
    }
  };

  if (isLoading || isError || !data) {
    return null;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width={unit[24]} />}
        leftButtonOnClick={() => {
          navigate(-1);
        }}
      />
      <S.TitleContainer>
        <Text variant="heading1">캐릭터를 획득했어요!</Text>
      </S.TitleContainer>
      <S.CharacterContainer>
        <S.CharacterCardContainer ref={imageRef}>
          <S.CharacterCard>
            <StarChip star={data.rarity} />
            <S.CharacterImageContainer>
              <img
                src={data.imageBigUrl}
                alt={CHARACTER_NAME[data.name]}
                style={{
                  ...CHARACTER_IMAGE_SIZE[data.name].big,
                }}
              />
            </S.CharacterImageContainer>
            <Text variant="heading2" color="semantic.text.strong">
              {CHARACTER_NAME[data.name]}
            </Text>
            <Text variant="body1R" color="semantic.text.subtle">
              {CHARACTER_DESCRIPTION[data.name]}
            </Text>
          </S.CharacterCard>
        </S.CharacterCardContainer>
      </S.CharacterContainer>
      <Button variant="text" onClick={handleDownload}>
        이미지 저장
      </Button>
    </>
  );
}

export default CharacterShare;
