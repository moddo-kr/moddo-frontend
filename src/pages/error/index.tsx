import errorHam from '@/assets/pngs/error-ham.png';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import * as S from './index.style';

function ErrorPage() {
  return (
    <S.Flex>
      <S.ErrorHamster src={errorHam} alt="error hamster" />
      <S.DescriptionContainer>
        <Text variant="heading2" color="semantic.text.default">
          잠시 문제가 발생했어요
        </Text>
        <S.SubText variant="body1R" color="semantic.text.subtle">
          현재 서버 연결에 문제가 있어요.
          <br />
          잠시 후 다시 시도해 주세요.
        </S.SubText>
      </S.DescriptionContainer>
      <Button>
        <a href="/home">홈으로 돌아가기</a>
      </Button>
    </S.Flex>
  );
}

export default ErrorPage;
