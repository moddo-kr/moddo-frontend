import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { DescriptionField, Header } from '@/shared/design-system/ui';
import { getToken } from '@/shared/design-system';
import { PageLayout } from '@/shared/ui/PageLayout';
import { CreateGroupLinkButton, EmptyBox } from './ui';
import * as S from './SelectGroupPage.styles';

function SelectGroupPage() {
  const navigate = useNavigate();

  return (
    <PageLayout $bg="neutral">
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        type="default"
        headingIcon={
          <ArrowLeft
            width={24}
            height={24}
            color={getToken('fg.alternative')}
          />
        }
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      <S.SelectGroupContent>
        <main>
          <DescriptionField
            title={`정산을 시작하려는\n모임을 선택해 주세요.`}
            sub="새로운 정산을 시작하려면 새로 생성을 선택해주세요."
          />
          <S.GroupButtonList>
            <CreateGroupLinkButton />
            <EmptyBox />
          </S.GroupButtonList>
        </main>
      </S.SelectGroupContent>
    </PageLayout>
  );
}

export default SelectGroupPage;
