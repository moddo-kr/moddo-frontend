import saveAs from 'file-saver';
import { ActionArea, Header, showToast } from '@/shared/design-system/ui';
import { useLoaderData, useNavigate } from 'react-router';
import { ArrowLeft, Download } from '@/shared/assets/svgs/icon';
import { getToken } from '@/shared/design-system';
import { PageLayout } from '@/shared/ui/PageLayout';
import useGetCharacter from '@/features/character-management/api/useGetCharacter';
import * as S from './CharacterSharePage.styles';

const sanitizeFilename = (name: string): string => {
  return name.replace(/[/\\:*?"<>|]/g, '_');
};

function CharacterSharePage() {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetCharacter(groupToken);
  const navigate = useNavigate();

  const handleDownload = async () => {
    if (!data) return;
    try {
      const response = await fetch(data.imageUrl);
      if (!response.ok) throw new Error();
      const blob = await response.blob();
      saveAs(blob, `${sanitizeFilename(data.name)}.png`);
      showToast({ type: 'success', content: '이미지 저장 완료!' });
    } catch {
      showToast({ type: 'error', content: '이미지 저장 실패!' });
    }
  };

  if (isLoading) return null;

  if (isError || !data) {
    // NOTE : 임의로 만든 화면,,,
    // 캐릭터가 없는 경우에 대한 처리가 필요합니다...
    return (
      <PageLayout $bg="neutral" $hasBottomFixedAction>
        <Header
          type="default"
          headingIcon={
            <ArrowLeft
              width={24}
              height={24}
              color={getToken('fg.alternative')}
            />
          }
          headingIconAriaLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
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
          position="bottom-fixed"
          mainAction={{ label: '정산하러 가기', onClick: () => navigate(-1) }}
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout $bg="neutral" $hasBottomFixedAction>
      <Header
        type="default"
        headingIcon={
          <ArrowLeft
            width={24}
            height={24}
            color={getToken('fg.alternative')}
          />
        }
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      <S.CharacterContainer>
        <S.TitleContainer>
          <S.PageTitle>캐릭터를 획득했어요!</S.PageTitle>
        </S.TitleContainer>
        <S.CharacterCardContainer>
          <S.CharacterImage
            src={data.imageUrl}
            alt={data.name}
            crossOrigin="anonymous"
          />
        </S.CharacterCardContainer>
        <S.DownloadButton onClick={handleDownload}>
          <Download width="1.25rem" color={getToken('fill.inverse.neutral')} />
          이미지 저장
        </S.DownloadButton>
      </S.CharacterContainer>
      {/* TODO : 공유하기 기능 개발시 공유하기 버튼으로 변경 */}
      <ActionArea
        position="bottom-fixed"
        mainAction={{ label: '돌아가기', onClick: () => navigate(-1) }}
      />
    </PageLayout>
  );
}

export default CharacterSharePage;
