import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';

interface BillDetailProps {}

function BillDetail({}: BillDetailProps) {
  const { unit } = useTheme();

  return (
    // <>
    <Header
      type="TitleCenter"
      leftButtonContent={
        <>
          <ArrowLeft width={unit[24]} />
          <Text variant="body1R">{`{모임 이름}`}</Text>
        </>
      }
      rightButtonContent={
        <Text variant="body1R" color="semantic.text.subtle">
          관리
        </Text>
      }
    />
    // </>
  );
}

export default BillDetail;
