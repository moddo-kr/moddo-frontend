import { Link } from 'react-router';
import notfoundHam from '@/assets/pngs/notfound-ham.png';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import { ROUTE } from '@/common/constants/route';
import * as S from './index.style';

function NotFoundPage() {
  return (
    <S.Flex>
      <S.Hamster src={notfoundHam} alt="not found hamster" />
      <S.DescriptionContainer>
        <Text variant="heading2" color="semantic.text.default">
          이런! 찾을 수 없는 페이지예요
        </Text>
        <S.SubText variant="body1R" color="semantic.text.subtle">
          요청하신 페이지가 존재하지 않아요.
        </S.SubText>
      </S.DescriptionContainer>
      <Button>
        <Link to={ROUTE.home}>홈으로 돌아가기</Link>
      </Button>
    </S.Flex>
  );
}

export default NotFoundPage;
