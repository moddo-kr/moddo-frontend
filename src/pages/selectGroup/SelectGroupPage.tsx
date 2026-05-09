import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { DescriptionField } from '@/shared/design-system/ui';
import Header from '@/shared/ui/Header';
import Flex from '@/shared/ui/Flex';
import { useTheme } from 'styled-components';
import { CreateGroupLinkButton, EmptyBox } from './ui';

function SelectGroupPage() {
  const navigate = useNavigate();
  const { color } = useTheme();

  return (
    <Flex
      direction="column"
      height="100%"
      bgColor={color.semantic.primary.subtle}
    >
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        type="default"
        headingIcon={<ArrowLeft width={24} height={24} />}
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        bgColor={color.semantic.primary.subtle}
      />
      <Flex
        direction="column"
        justify="space-between"
        height="100%"
        pt="6"
        flexGrow={1}
        bgColor="semantic.background.normal.alternative"
      >
        <main>
          <DescriptionField
            title={`정산을 시작하려는\n모임을 선택해 주세요.`}
            sub="새로운 정산을 시작하려면 새로 생성을 선택해주세요."
          />

          <Flex direction="column" mx={5} mt={5} gap={8}>
            <CreateGroupLinkButton />
            <EmptyBox />
          </Flex>
        </main>
      </Flex>
    </Flex>
  );
}

export default SelectGroupPage;
