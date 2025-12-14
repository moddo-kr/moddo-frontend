import { CheckCircle } from '@/shared/assets/svgs/icon';
import theme from '@/shared/styles/theme';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import * as S from './EmptyBox.styles';

function EmptyBox() {
  return (
    <S.EmptyBox>
      <Flex
        justifyContent="center"
        direction="column"
        alignItems="center"
        gap={4}
      >
        <CheckCircle
          width={30}
          height={30}
          fill={theme.color.semantic.icon.disabled}
        />
        <Text variant="body2R" color="semantic.text.subtle">
          기존 모임이 없어요.
        </Text>
      </Flex>
    </S.EmptyBox>
  );
}

export default EmptyBox;
