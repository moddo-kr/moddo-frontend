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
import * as S from './index.styles';

const DUMMY_CHARACTER_DATA: CharacterData = {
  name: 'angel',
  rarity: 2,
  imageUrl: characterImageUrl,
  imageBigUrl: characterImageUrl,
};

function CharacterShare() {
  // const { groupToken } = useLoaderData();
  // 캐릭터를 받아오는 로직
  const navigate = useNavigate();
  const { unit } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    // 돔 요소를 이미지로 변환
    if (imageRef.current) {
      toPng(imageRef.current, { width: 440, height: 440 })
        .then((dataUrl) => {
          // 이미지 다운로드
          saveAs(dataUrl, `${DUMMY_CHARACTER_DATA.name}.png`);
        })
        .catch(() => {
          showToast({
            type: 'error',
            content: 'QR코드 다운로드에 실패했어요.',
          });
        });
    }
  };

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
            <StarChip star={DUMMY_CHARACTER_DATA.rarity} />
            <S.CharacterImageContainer>
              <img
                src={DUMMY_CHARACTER_DATA.imageBigUrl}
                alt={CHARACTER_NAME[DUMMY_CHARACTER_DATA.name]}
                style={{
                  ...CHARACTER_IMAGE_SIZE[DUMMY_CHARACTER_DATA.name].big,
                }}
              />
            </S.CharacterImageContainer>
            <Text variant="heading2" color="semantic.text.strong">
              {CHARACTER_NAME[DUMMY_CHARACTER_DATA.name]}
            </Text>
            <Text variant="body1R" color="semantic.text.subtle">
              {CHARACTER_DESCRIPTION[DUMMY_CHARACTER_DATA.name]}
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
