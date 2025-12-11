import { Add } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import * as S from './CreateGroupLinkButton.styles';

function CreateGroupLinkButton() {
  return (
    <S.LinkButton to={ROUTE.groupSetup}>
      <Flex
        justifyContent="center"
        direction="column"
        alignItems="center"
        gap={4}
      >
        <Add width={36} />
        <Text variant="body1Sb" color="semantic.text.inverse">
          새로 생성
        </Text>
      </Flex>
    </S.LinkButton>
  );
}

export default CreateGroupLinkButton;
