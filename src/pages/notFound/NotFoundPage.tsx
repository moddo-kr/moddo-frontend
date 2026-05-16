import { useNavigate } from 'react-router';
import notfoundHam from '@/shared/assets/pngs/notfound-ham.png';
import { Button } from '@/shared/design-system/ui';
import { ROUTE } from '@/shared/config/route';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './NotFoundPage.style';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageLayout $bg="neutral">
      <S.Flex>
        <S.Hamster src={notfoundHam} alt="not found hamster" />
        <S.DescriptionContainer>
          <S.NotFoundTitle>이런! 찾을 수 없는 페이지예요</S.NotFoundTitle>
          <S.NotFoundDescription>
            요청하신 페이지가 존재하지 않아요.
          </S.NotFoundDescription>
        </S.DescriptionContainer>
        <Button onClick={() => navigate(ROUTE.home)}>홈으로 돌아가기</Button>
      </S.Flex>
    </PageLayout>
  );
}

export default NotFoundPage;
