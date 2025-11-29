import errorHam from '@/shared/assets/pngs/error-ham.png';
import Text from '@/shared/ui/Text';
import Button from '@/shared/ui/Button';
import { ROUTE } from '@/shared/config/route';
import * as S from './ErrorPage.style';

interface ErrorPageProps {
  title?: string;
  description?: string;
  action?: {
    text?: string;
    href?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (arg: any) => void;
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
  return (
    <S.Flex>
      <S.ErrorHamster src={errorHam} alt="error hamster" />
      <S.DescriptionContainer>
        <Text variant="heading2" color="semantic.text.default">
          {title}
        </Text>
        <S.SubText variant="body1R" color="semantic.text.subtle">
          {description}
        </S.SubText>
      </S.DescriptionContainer>
      <Button onClick={action.onClick}>
        <a href={action.href}>{action.text}</a>
      </Button>
    </S.Flex>
  );
}

export default ErrorPage;
