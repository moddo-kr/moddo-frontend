import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import AddMember from '@/common/components/AddMember';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';
import { ROUTE } from '@/common/constants/route';
import useLocalStorage from '@/common/hooks/useLocalStorage';
import { GROUP_TOKEN } from '@/common/constants/storageKey';
import { ArrowLeft } from '@/assets/svgs/icon';
import DescriptionField from '@/common/components/DescriptionField';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Button from '@/common/components/Button';
import { showToast } from '@/common/components/Toast';
import * as S from '../index.styles';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

function MemberSetup() {
  const { unit } = useTheme();
  const navigate = useNavigate();
  const [groupToken] = useLocalStorage<string>({
    key: GROUP_TOKEN,
    initialValue: '',
  });
  const { data, isLoading } = useGetGroupBasicInfo(
    groupToken,
    {
      // CHECK - 에러 핸들링 방식 논의
      // 총무가 아닌 토큰으로 모임 정보를 요청하는 경우
      403: () => {
        showToast({
          type: 'error',
          content: '모임의 총무만 참여자를 추가할 수 있어요.',
        });
        navigate(ROUTE.home);
      },
    },
    [403]
  );

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width={unit[24]} />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={() => navigate(-1)}
      />
      <DescriptionField
        title={`모임에 함께한\n참여자를 추가해주세요.`}
        sub="참여자는 지출 내역에서도 추가할 수 있어요!"
      />
      <S.PageContentWrapper>
        <AddMember
          members={data.members.reverse() || []}
          groupToken={groupToken}
        />
      </S.PageContentWrapper>
      <BottomButtonContainer>
        <Button
          disabled={data.members.length <= 1}
          onClick={() => navigate(ROUTE.createBill)}
        >
          정산 시작!
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default MemberSetup;
