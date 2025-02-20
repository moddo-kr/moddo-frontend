import { Dispatch, SetStateAction } from 'react';
import { useLoaderData } from 'react-router';
import { Text, Stack } from '@chakra-ui/react';
import AddMember from '@/common/components/AddMember';
import BottomSheet from '@/common/components/BottomSheet';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';

interface MemberBottomSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // groupId: number;
}

function MemberBottomSheet({ open, setOpen }: MemberBottomSheetProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetGroupBasicInfo(groupToken);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <BottomSheet open={open} setOpen={setOpen}>
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
        <AddMember members={data.members} />
      </Stack>
    </BottomSheet>
  );
}

export default MemberBottomSheet;
