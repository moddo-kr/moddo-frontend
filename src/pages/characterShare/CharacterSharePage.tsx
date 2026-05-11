import { useRef } from 'react';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import {
  ActionArea,
  Header,
  TextButton,
  showToast,
} from '@/shared/design-system/ui';
import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft, Download } from '@/shared/assets/svgs/icon';
import { CHARACTER_DATA } from '@/entities/character/config/character';
import StarChip from '@/features/character-management/ui/StarChip';
import useGetCharacter from '@/features/character-management/api/useGetCharacter';
import * as S from './CharacterSharePage.styles';

function CharacterSharePage() {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetCharacter(groupToken);
  const navigate = useNavigate();
  const { unit, color } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);

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

  if (isLoading) return null;

  if (isError || !data) {
    // NOTE : 임의로 만든 화면,,,
    // 캐릭터가 없는 경우에 대한 처리가 필요합니다...
    return (
      <>
        <Header
          type="default"
          headingIcon={<ArrowLeft width={unit[24]} />}
          headingIconAriaLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
          bgColor={color.semantic.background.normal.alternative}
        />
        <S.CharacterContainer>
          <S.TitleContainer>
            <S.EmptyStateTitle>획득한 캐릭터가 없어요!</S.EmptyStateTitle>
            <S.EmptyStateDescription>
              정산을 완료하면 캐릭터를 획득할 수 있어요!
            </S.EmptyStateDescription>
          </S.TitleContainer>
        </S.CharacterContainer>
        <ActionArea
          mainAction={{ label: '정산하러 가기', onClick: () => navigate(-1) }}
        />
      </>
    );
  }

  return (
    <>
      <Header
        type="default"
        headingIcon={<ArrowLeft width={unit[24]} />}
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        bgColor={color.semantic.background.normal.alternative}
      />
      <S.CharacterContainer>
        <S.TitleContainer>
          <S.PageTitle>캐릭터를 획득했어요!</S.PageTitle>
        </S.TitleContainer>
        <S.CharacterCardContainer ref={imageRef}>
          <S.CharacterCard>
            <StarChip star={data.rarity} />
            <S.CharacterImageContainer>
              <img
                src={data.imageBigUrl}
                alt={data.name}
                style={{
                  ...CHARACTER_DATA[data.name].imageSize.big,
                }}
              />
            </S.CharacterImageContainer>
            <S.CharacterName>{data.name}</S.CharacterName>
            <S.CharacterDescription>
              {CHARACTER_DATA[data.name].description}
            </S.CharacterDescription>
          </S.CharacterCard>
        </S.CharacterCardContainer>
        <TextButton onClick={handleDownload} style={{ marginBottom: unit[20] }}>
          <Download width={unit[20]} />
          이미지 저장
        </TextButton>
      </S.CharacterContainer>
      {/* TODO : 공유하기 기능 개발시 공유하기 버튼으로 변경 */}
      <ActionArea
        mainAction={{ label: '돌아가기', onClick: () => navigate(-1) }}
      />
    </>
  );
}

export default CharacterSharePage;
