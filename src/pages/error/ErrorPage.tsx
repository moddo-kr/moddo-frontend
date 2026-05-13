import { useNavigate } from 'react-router';
import errorHam from '@/shared/assets/pngs/error-ham.png';
import { Button } from '@/shared/design-system/ui';
import { ROUTE } from '@/shared/config/route';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './ErrorPage.style';

interface ErrorPageProps {
  title?: string;
  description?: string;
  action?: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
}

function ErrorPage({
  title = '잠시 문제가 발생했어요',
  description = `현재 서버 연결에 문제가 있어요.\n잠시 후 다시 시도해 주세요.`,
  action = {
    text: '홈으로 돌아가기',
    href: ROUTE.home,
  },
}: ErrorPageProps) {
  const navigate = useNavigate();

  const handleActionClick = () => {
    if (action.onClick) {
      action.onClick();
      return;
    }

    if (action.href) {
      navigate(action.href);
    }
  };

  return (
    <PageLayout $bg="neutral">
      <S.Flex>
        <S.ErrorHamster src={errorHam} alt="error hamster" />
        <S.DescriptionContainer>
          <S.ErrorTitle>{title}</S.ErrorTitle>
          <S.SubText>{description}</S.SubText>
        </S.DescriptionContainer>
        <Button onClick={handleActionClick}>{action.text}</Button>
      </S.Flex>
    </PageLayout>
  );
}

export default ErrorPage;
