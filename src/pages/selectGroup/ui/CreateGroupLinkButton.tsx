import { Add } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import * as S from './CreateGroupLinkButton.styles';

function CreateGroupLinkButton() {
  return (
    <S.LinkButton to={ROUTE.groupSetup} aria-label="새로운 모임 생성">
      <S.CreateGroupButtonContent>
        <Add width={36} />
        <S.CreateGroupLabel>새로 생성</S.CreateGroupLabel>
      </S.CreateGroupButtonContent>
    </S.LinkButton>
  );
}

export default CreateGroupLinkButton;
