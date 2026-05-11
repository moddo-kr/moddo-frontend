import { generatePath, useNavigate } from 'react-router';
import { useGetGroupDetail } from '@/entities/group/api/groupQueries';
import { ROUTE } from '@/shared/config/route';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import {
  ActionArea,
  DescriptionField,
  Header,
} from '@/shared/design-system/ui';
import { BoundaryError } from '@/shared/types/error.type';
import useLocalStorage from '@/shared/lib/useLocalStorage';
import { PageLayout } from '@/shared/ui/PageLayout';
import AddMember from './ui/AddMember';
import * as S from './MemberSetupPage.styles';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

const GROUP_TOKEN = 'groupToken';

function MemberSetupPage() {
  const navigate = useNavigate();
  const [groupToken] = useLocalStorage<string>({
    key: GROUP_TOKEN,
    initialValue: '',
  });
  const { data, isLoading } = useGetGroupDetail(
    groupToken,
    {
      // 총무가 아닌 토큰으로 모임 정보를 요청하는 경우
      // NOTE - API 문서에는 403 에러로 되어 있지만 실제로는 500 에러가 발생함
      403: () => {
        throw new BoundaryError({
          title: '접근 권한이 없어요',
          description: '모임의 총무만 참여자를 추가할 수 있어요.',
        });
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
    <PageLayout>
      <Header
        type="default"
        headingIcon={<ArrowLeft width="1.5rem" />}
        headingLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
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
      <ActionArea
        mainAction={{
          label: '정산 시작!',
          onClick: () =>
            navigate(generatePath(ROUTE.createExpense, { groupToken })),
          disabled: data.members.length <= 1,
        }}
      />
    </PageLayout>
  );
}

export default MemberSetupPage;
