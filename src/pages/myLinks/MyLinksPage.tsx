import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import Button from '@/shared/ui/Button';
import Flex from '@/shared/ui/Flex';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';

const DUMMY_LINKS = [
  { name: '서교동 모각코', link: 'https://moddo.kr' },
  { name: '합정동 모각디', link: 'https://moddo.kr' },
];

function MyLinksPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        type="TitleCenter"
        title="링크 관리"
        leftButtonContent={<ArrowLeft width={24} />}
        leftButtonOnClick={() => navigate(-1)}
      />
      {DUMMY_LINKS && DUMMY_LINKS.length > 0 ? (
        <div>..</div>
      ) : (
        <Flex
          pt={24}
          pb={22}
          px={20}
          gap={24}
          height="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
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
