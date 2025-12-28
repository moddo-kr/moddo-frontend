import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import useGetExpensesLinks from '@/features/expense-management/api/useGetExpensesLinks';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import Button from '@/shared/ui/Button';
import Flex from '@/shared/ui/Flex';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';
import LinkBox from './ui/LinkBox';

function MyLinksPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { data, isLoading } = useGetExpensesLinks({}, []);

  if (isLoading) {
    <>
      <Header
        type="TitleCenter"
        title="링크 관리"
        leftButtonContent={<ArrowLeft width={24} />}
        leftButtonOnClick={() => navigate(-1)}
        bgColor={theme.color.semantic.background.normal.alternative}
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
        bgColor={theme.color.semantic.background.normal.alternative}
      >
        로딩중...
      </Flex>
    </>;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        title="링크 관리"
        leftButtonContent={<ArrowLeft width={24} />}
        leftButtonOnClick={() => navigate(-1)}
        bgColor={theme.color.semantic.background.normal.alternative}
      />
      {data?.links && data.links.length > 0 ? (
        <Flex
          pt={24}
          pb={22}
          px={20}
          gap={8}
          flex={1}
          height="auto"
          direction="column"
          bgColor={theme.color.semantic.background.normal.alternative}
        >
          {data.links.map((link) => (
            <LinkBox
              key={link.id}
              id={link.id}
              name={link.name}
              url={link.url}
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
          bgColor={theme.color.semantic.background.normal.alternative}
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
            size="md"
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
