import { Dispatch, SetStateAction } from 'react';
import { useLoaderData } from 'react-router';
import { Text, Stack } from '@chakra-ui/react';
import BottomSheet from '@/common/components/BottomSheet';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';
import { Group } from '@/common/types/group.type';

interface MemberBottomSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setGroupInfo: (groupInfo: Group) => void; // 참여자 정보가 바뀔 때 모아서 업데이트하는 함수
}

function MemberBottomSheet({
  open,
  setOpen,
  setGroupInfo,
}: MemberBottomSheetProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetGroupBasicInfo(groupToken);

  const onCloseHandler = () => {
    if (data) {
      setGroupInfo(data);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <BottomSheet open={open} setOpen={setOpen} onCloseHandler={onCloseHandler}>
      <Stack
        paddingTop="2rem"
        paddingBottom="1.75rem"
        paddingX="1.25rem"
        gap="1.75rem"
        width="100%"
      >
        <Text fontSize="1.25rem" fontWeight="700" color="#444950">
          참여자 추가
        </Text>
      </Stack>
    </BottomSheet>
  );
}

export default MemberBottomSheet;
