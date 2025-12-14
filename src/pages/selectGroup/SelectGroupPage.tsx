import { useNavigate } from 'react-router';
import { useGetGroupList } from '@/entities/group/api/groupQueries';
import Header from '@/shared/ui/Header';
import DescriptionField from '@/shared/ui/DescriptionField';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';
import { CreateGroupLinkButton, EmptyButton, GroupLinkButton } from './ui';

function SelectGroupPage() {
  const navigate = useNavigate();
  const { data: groupList, isLoading } = useGetGroupList({}, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (!groupList) {
    return null;
  }

  return (
    <>
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        title="뒤로가기"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => navigate(-1)}
        bgColor="#f1f3f5"
      />
      <Flex
        direction="column"
        justify="space-between"
        height="100%"
        pt="10px"
        flexGrow={1}
        bgColor="#f1f3f5"
      >
        <main>
          <DescriptionField
            title={
              <Flex direction="column">
                <Text variant="heading2" color="semantic.text.strong">
                  정산을 시작하려는
                </Text>
                <Text variant="heading2" color="semantic.text.strong">
                  모임을 선택해 주세요.
                </Text>
              </Flex>
            }
            sub="새로운 정산을 시작하려면 새로 생성을 선택해주세요."
            bgColor="semantic.primary.subtle"
          />

          <Flex direction="column" mx={5} mt={5} gap={8}>
            <CreateGroupLinkButton />
            {groupList.length !== 0 ? (
              groupList.map((group) => (
                <GroupLinkButton key={group.id} group={group} />
              ))
            ) : (
              <EmptyButton />
            )}
          </Flex>
        </main>
      </Flex>
    </>
  );
}

export default SelectGroupPage;
