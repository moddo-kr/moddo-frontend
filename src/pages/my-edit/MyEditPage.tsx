import { useNavigate } from 'react-router';
import { ArrowLeft, Menu } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';
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
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width="1.5rem" />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={() => navigate(-1)}
        rightButtonContent={<Menu width="1.5rem" />}
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
