import { useNavigate } from 'react-router';
import { useGetGroupList } from '@/entities/group/api/groupQueries';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import DescriptionField from '@/shared/ui/DescriptionField';
import Flex from '@/shared/ui/Flex';
import { CreateGroupLinkButton, EmptyBox, GroupLinkButton } from './ui';

function SelectGroupPage() {
  const navigate = useNavigate();
  const { data: groupList, isLoading } = useGetGroupList({}, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        type="default"
        title=""
        headingIcon={<ArrowLeft width={24} height={24} />}
        headingLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        bgColor="semantic.background.normal.alternative"
      />
      <Flex
        direction="column"
        justify="space-between"
        height="100%"
        pt="6"
        flexGrow={1}
        bgColor="semantic.background.normal.alternative"
      >
        <main>
          <DescriptionField
            title={`정산을 시작하려는\n모임을 선택해 주세요.`}
            sub="새로운 정산을 시작하려면 새로 생성을 선택해주세요."
            bgColor="semantic.primary.subtle"
          />

          <Flex direction="column" mx={5} mt={5} gap={8}>
            <CreateGroupLinkButton />
            {groupList && groupList.length !== 0 ? (
              groupList.map((group) => (
                <GroupLinkButton key={group.id} group={group} />
              ))
            ) : (
              <EmptyBox />
            )}
          </Flex>
        </main>
      </Flex>
    </>
  );
}

export default SelectGroupPage;
