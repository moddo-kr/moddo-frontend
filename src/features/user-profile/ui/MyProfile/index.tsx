import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { useGetUserInfo } from '@/entities/auth/api/useGetUserInfo';
import { ROUTE } from '@/shared/config/route';
import { Button, ProfileImage } from '@/shared/design-system/ui';
import Flex from '@/shared/ui/Flex';
import * as S from './index.styles';

function MyProfile() {
  const { data: user } = useGetUserInfo();
  const navigate = useNavigate();
  const theme = useTheme();

  // suspense로 감싸져 있긴 초기에 없는 경우의 에러를 방지하기 위해 null guard를 추가했습니다.
  // ref: https://github.com/moddo-kr/moddo-frontend/pull/30#discussion_r3068041167
  if (!user) {
    return null;
  }

  return (
    <S.ProfileContainer>
      <ProfileImage size="36" src={user?.profile} />
      <Flex direction="column" flex={1} gap={4}>
        <S.UserName>{user.name}</S.UserName>
        {/* TODO: 디자인 시스템 정비 후 다시 디자인 확인이 필요합니다 (Opacity를 계속 쓰는지?) */}
        <S.UserEmail>{user.email}</S.UserEmail>
      </Flex>
      {/* TODO: 현 피그마 디자인은 Chip이 Button으로 쓰이고 있는 상황이라 우선 button 컴포넌트 기준으로 구현했습니다. 디자인시스템 정리 후 다시 확인이 필요합니다! */}
      <Button
        size="small"
        onClick={() => navigate(ROUTE.myEdit)}
        style={{
          backgroundColor: theme.color.semantic.background.normal.inverse,
        }}
      >
        정보수정
      </Button>
    </S.ProfileContainer>
  );
}

export default MyProfile;
