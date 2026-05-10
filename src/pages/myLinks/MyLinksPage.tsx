import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import useGetGroupLinks from '@/features/expense-management/api/useGetExpensesLinks';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import generateShareLink from '@/shared/lib/generateShareLink';
import { Button, Header } from '@/shared/design-system/ui';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import { LinkCard } from './ui/LinkCard';

function MyLinksPage() {
  const navigate = useNavigate();
  const { color } = useTheme();
  const { data: groupList, isLoading } = useGetGroupLinks({}, []);

  if (isLoading) {
    return (
      <>
        <Header
          type="default"
          title="링크 관리"
          headingIcon={<ArrowLeft width={24} />}
          headingIconAriaLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
          bgColor={color.semantic.primary.subtle}
        />
        <Flex
          pt={24}
          pb={22}
          px={20}
          flex={1}
          justifyContent="center"
          alignItems="center"
          height="auto"
          direction="column"
          bgColor={color.semantic.background.normal.alternative}
        >
          로딩중...
        </Flex>
      </>
    );
  }

  return (
    <>
      <Header
        type="default"
        title="링크 관리"
        headingIcon={<ArrowLeft width={24} />}
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        bgColor={color.semantic.primary.subtle}
      />
      {groupList && groupList.length > 0 ? (
        <Flex
          pt={24}
          pb={22}
          px={20}
          gap={8}
          flex={1}
          height="auto"
          direction="column"
          bgColor={color.semantic.background.normal.alternative}
        >
          {groupList.map((group) => (
            <LinkCard
              key={group.settlementId}
              name={group.name}
              url={generateShareLink(group.groupCode)}
            />
          ))}
        </Flex>
      ) : (
        <Flex
          pt={24}
          pb={22}
          px={20}
          gap={24}
          flex={1}
          justifyContent="center"
          alignItems="center"
          height="auto"
          direction="column"
          bgColor={color.semantic.background.normal.alternative}
        >
          <Text
            textAlign="center"
            variant="body1R"
            color="semantic.text.subtle"
          >
            아직 링크가 없어요.
            <br />
            모임을 만들고 링크를 공유해 함께 정산해 보세요!
          </Text>
          <Button
            variant="primary"
            size="medium"
            onClick={() => navigate(ROUTE.groupSetup)}
          >
            모임 생성하기
          </Button>
        </Flex>
      )}
    </>
  );
}

export default MyLinksPage;
