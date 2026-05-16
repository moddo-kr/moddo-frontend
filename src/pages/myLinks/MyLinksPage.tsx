import { useNavigate } from 'react-router';
import useGetGroupLinks from '@/features/expense-management/api/useGetExpensesLinks';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import generateShareLink from '@/shared/lib/generateShareLink';
import { Button, Header } from '@/shared/design-system/ui';
import { getToken } from '@/shared/design-system';
import { PageLayout } from '@/shared/ui/PageLayout';
import { LinkCard } from './ui/LinkCard';
import * as S from './MyLinksPage.styles';

function MyLinksPage() {
  const navigate = useNavigate();
  const { data: groupList, isLoading } = useGetGroupLinks({}, []);

  if (isLoading) {
    return (
      <PageLayout $bg="neutral">
        <Header
          type="default"
          title="링크 관리"
          headingIcon={
            <ArrowLeft width={24} color={getToken('fg.alternative')} />
          }
          headingIconAriaLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
        />
        <S.LinksLoadingState role="status" aria-live="polite" aria-busy="true">
          로딩중...
        </S.LinksLoadingState>
      </PageLayout>
    );
  }

  return (
    <PageLayout $bg="neutral">
      <Header
        type="default"
        title="링크 관리"
        headingIcon={
          <ArrowLeft width={24} color={getToken('fg.alternative')} />
        }
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      {groupList && groupList.length > 0 ? (
        <S.LinkCardList>
          {groupList.map((group) => (
            <LinkCard
              key={group.settlementId}
              name={group.name}
              url={generateShareLink(group.groupCode)}
            />
          ))}
        </S.LinkCardList>
      ) : (
        <S.LinksEmptyState>
          <S.EmptyStateMessage>
            아직 링크가 없어요.
            <br />
            모임을 만들고 링크를 공유해 함께 정산해 보세요!
          </S.EmptyStateMessage>
          <Button
            variant="primary"
            size="medium"
            onClick={() => navigate(ROUTE.groupSetup)}
          >
            모임 생성하기
          </Button>
        </S.LinksEmptyState>
      )}
    </PageLayout>
  );
}

export default MyLinksPage;
