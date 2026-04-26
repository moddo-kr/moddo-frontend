import { useNavigate } from 'react-router';
import { ArrowLeft, Menu } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import Divider from '@/shared/ui/Divider';
import { useTheme } from 'styled-components';
import { LogoutButton, UnregisterButton } from '@/features/auth';
// import { TermsLink } from './ui';

function MyEditPage() {
  const navigate = useNavigate();
  const { unit } = useTheme();

  return (
    <>
      <Header
        type="default"
        title=""
        headingIcon={<ArrowLeft width="1.5rem" />}
        headingLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        trailingIcon={<Menu width="1.5rem" />}
        // TODO: 사이드 메뉴 핸들러 연결 필요
        onTrailingIconClick={() => {}}
      />
      {/* TODO: 이용 약관 페이지 추가 여부를 결정하고, 이용 약관 페이지를 생성한 다음 버튼 표시  */}
      {/* <TermsLink /> */}
      <Divider style={{ margin: `${unit[16]} 0` }} />
      <UnregisterButton />
      <LogoutButton />
    </>
  );
}

export default MyEditPage;
