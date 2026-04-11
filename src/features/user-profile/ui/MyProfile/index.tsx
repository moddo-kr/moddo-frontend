import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { useGetUserInfo } from '@/entities/auth/api/useGetUserInfo';
import { ROUTE } from '@/shared/config/route';
import MemberProfileImage from '@/shared/ui/MemberProfileImage';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import Button from '@/shared/ui/Button';
import * as S from './index.styles';

function MyProfile() {
  const { data: user } = useGetUserInfo();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <S.ProfileContainer>
      <MemberProfileImage size="sm" src={user?.profile} />
      <Flex direction="column" flex={1} gap={4}>
        <Text variant="body1Sb">{user.name}</Text>
        {/* TODO: 디자인 시스템 정비 후 다시 디자인 확인이 필요합니다 (Opacity를 계속 쓰는지?) */}
        <Text
          variant="body2R"
          color="semantic.text.default"
          style={{ opacity: 0.5 }}
        >
          {user.email}
        </Text>
      </Flex>
      {/* TODO: 현 피그마 디자인은 Chip이 Button으로 쓰이고 있는 상황이라 우선 button 컴포넌트 기준으로 구현했습니다. 디자인시스템 정리 후 다시 확인이 필요합니다! */}
      <Button
        size="sm"
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
