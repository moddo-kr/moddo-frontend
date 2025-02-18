import { useLoaderData } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import { GroupTokenUrlLoaderData } from '@/common/types/group.type';

function BillDetail() {
  const { unit } = useTheme();
  // const { groupToken, groupData } = useLoaderData(); // lint 오류 제거용 주석..
  const { groupData } = useLoaderData<GroupTokenUrlLoaderData>();
  // TODO : 필요하다면 useQuery의 initialData에 groupData를 넣어서 사용

  return (
    // <>
    <Header
      type="TitleCenter"
      leftButtonContent={
        <>
          <ArrowLeft width={unit[24]} />
          <Text variant="body1R">{groupData.groupName}</Text>
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
