import { Suspense } from 'react';
import { useNavigate } from 'react-router';
import { Menu } from '@/shared/assets/svgs/icon';
import { Header } from '@/shared/design-system/ui';
import { ROUTE } from '@/shared/config/route';
import { CharacterSection } from '@/features/character-management/ui';
import { MyProfile } from '@/features/user-profile/ui';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './MyPage.styles';

function MyPage() {
  const navigate = useNavigate();

  return (
    <PageLayout $bg="neutral">
      <Header
        type="1depth"
        title="마이페이지"
        trailingIcon={<Menu width={24} />}
        trailingIconAriaLabel="홈으로 이동"
        onTrailingIconClick={() => navigate(ROUTE.home)}
      />
      <Suspense fallback={<S.ProfileContainer>로딩 중...</S.ProfileContainer>}>
        <MyProfile />
      </Suspense>
      <CharacterSection />
    </PageLayout>
  );
}

export default MyPage;
