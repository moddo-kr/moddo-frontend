import { useRef } from 'react';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import { showToast } from '@/common/components/Toast';
import Button from '@/common/components/Button';
import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft, Download } from '@/assets/svgs/icon';
import {
  CHARACTER_IMAGE_SIZE,
  CHARACTER_DESCRIPTION,
} from '@/common/constants/character';
import StarChip from '@/common/components/StarChip';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import useGetCharacter from '@/common/queries/image/useGetCharacter';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import * as S from './index.styles';

function CharacterShare() {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetCharacter(groupToken);
  const navigate = useNavigate();
  const { unit } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!data) return;
    // 돔 요소를 이미지로 변환
    if (imageRef.current) {
      // 440x440 사이즈로 이미지 다운로드
      toPng(imageRef.current, { width: 440, height: 440 })
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

  if (isLoading) return null;

  if (isError || !data) {
    // 캐릭터가 아직 없는 경우에 대한 처리가 필요할 수도 있음
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
      <BottomButtonContainer>
        {/* TODO : 공유하기 기능 개발시 공유하기 버튼으로 변경 */}
        <Button onClick={() => navigate(-1)}>돌아가기</Button>
      </BottomButtonContainer>
    </>
  );
}

export default CharacterShare;
