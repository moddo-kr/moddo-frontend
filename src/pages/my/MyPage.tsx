import { Suspense } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { Bell, Menu } from '@/shared/assets/svgs/icon';
import { Header } from '@/shared/design-system/ui';
import { ROUTE } from '@/shared/config/route';
import { CharacterSection } from '@/features/character-management/ui';
import { MyProfile } from '@/features/user-profile/ui';
import * as S from './MyPage.styles';

function MyPage() {
  const navigate = useNavigate();
  const { color } = useTheme();

  return (
    <>
      <Header
        type="1depth"
        title="마이페이지"
        trailingIcon={<Bell width={24} height={24} />}
        // trailingIconAriaLabel="알림"
        trailingSubIcon={<Menu width={24} />}
        trailingSubIconAriaLabel="홈으로 이동"
        onTrailingSubIconClick={() => navigate(ROUTE.home)}
        bgColor={color.semantic.background.normal.alternative}
      />
      <Suspense fallback={<S.ProfileContainer>로딩 중...</S.ProfileContainer>}>
        <MyProfile />
      </Suspense>
      <CharacterSection />
    </>
  );
}

export default MyPage;
