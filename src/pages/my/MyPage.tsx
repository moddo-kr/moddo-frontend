import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { Menu } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import { ROUTE } from '@/shared/config/route';
import { MyProfile } from '@/entities/auth/ui';

function MyPage() {
  const navigate = useNavigate();
  const { color } = useTheme();

  return (
    <>
      {/* TODO: 디자인 시스템 정리 + 헤더 컴포넌트 정비 후에 다시 스타일링이 필요합니다. */}
      <Header
        type="TitleCenter"
        title="마이페이지"
        rightButtonContent={<Menu width={24} />}
        rightButtonOnClick={() => navigate(ROUTE.myEdit)}
        bgColor={color.semantic.background.normal.alternative}
      />
      <MyProfile />
    </>
  );
}

export default MyPage;
