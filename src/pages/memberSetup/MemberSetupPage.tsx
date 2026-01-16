import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import DescriptionField from '@/shared/ui/DescriptionField';
import AsyncBoundary from '@/shared/ui/AsyncBoundary';
import MemberSetupPageContent from './ui/MemberSetupPageContent';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

function MemberSetupPage() {
  const { unit } = useTheme();
  const navigate = useNavigate();

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
      <AsyncBoundary>
        <MemberSetupPageContent />
      </AsyncBoundary>
    </>
  );
}

export default MemberSetupPage;
