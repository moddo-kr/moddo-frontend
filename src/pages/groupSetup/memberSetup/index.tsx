import { useLoaderData, useNavigate } from 'react-router';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import AddMember from '@/common/components/AddMember';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';
import { ROUTE } from '@/common/constants/route';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import DescriptionField from '@/common/components/DescriptionField';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Button from '@/common/components/Button';
import * as S from '../index.styles';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

interface MemberSetupProps {
  groupToken: string;
}

function MemberSetup({ groupToken }: MemberSetupProps) {
  const { unit } = useTheme();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetGroupBasicInfo(groupToken);

  if (isLoading || isError) {
    return <div>로딩중</div>;
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>;
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
        <AddMember members={data.members || []} groupToken={groupToken}/>
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
