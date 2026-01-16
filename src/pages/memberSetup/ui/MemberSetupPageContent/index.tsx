import { BoundaryError } from '@/shared/types/error.type';
import useGetGroupBasicInfoSuspense from '@/features/group-creation/api/useGetGroupBasicInfoSuspense';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Button from '@/shared/ui/Button';
import { ROUTE } from '@/shared/config/route';
import useLocalStorage from '@/shared/lib/useLocalStorage';
import { useNavigate } from 'react-router';
import AddMember from '../AddMember';
import * as S from './index.styles';

const GROUP_TOKEN = 'groupToken';

function MemberSetupPageContent() {
  const [groupToken] = useLocalStorage<string>({
    key: GROUP_TOKEN,
    initialValue: '',
  });
  const navigate = useNavigate();
  const { data, isFetching } = useGetGroupBasicInfoSuspense(groupToken, {
    // 총무가 아닌 토큰으로 모임 정보를 요청하는 경우
    // NOTE - API 문서에는 403 에러로 되어 있지만 실제로는 500 에러가 발생함
    403: () => {
      throw new BoundaryError({
        title: '접근 권한이 없어요',
        description: '모임의 총무만 참여자를 추가할 수 있어요.',
      });
    },
  });

  return (
    <>
      <S.PageContentWrapper>
        <AddMember
          members={data.members.reverse() || []}
          groupToken={groupToken}
          isFetching={isFetching}
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
export default MemberSetupPageContent;
