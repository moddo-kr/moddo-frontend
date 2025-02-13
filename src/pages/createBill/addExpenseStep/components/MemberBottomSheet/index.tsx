import { Dispatch, SetStateAction } from 'react';
import { Text, Stack } from '@chakra-ui/react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
} from '@/common/components/Drawer/drawer';
import AddMember from '@/common/components/AddMember';
import { Member } from '@/common/types/member.type';

const DUMMY_MEMBERS: Member[] = [
  {
    id: '1234',
    name: '김계란',
    role: 'treasurer',
  },
  {
    id: '4567',
    name: '박완숙',
    role: 'participant',
  },
];

interface MemberBottomSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // groupId: number;
}

function MemberBottomSheet({ open, setOpen }: MemberBottomSheetProps) {
  // TODO : 기존 모든 참여자를 불러오는 API 호출

  const handleAddName = (name: string) => {
    // TODO : 새로운 참여자 추가 API 호출 (PUT addGroupMember)
    console.log('새로운 참여자 추가: ', name);
  };

  const handleDeleteMember = (memberId: string) => {
    // TODO : 참여자 삭제 API 호출
    console.log('참여자 삭제: ', memberId);
  };

  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="bottom"
    >
      <DrawerBackdrop />
      <DrawerContent>
        <Stack
          paddingTop="2rem"
          paddingBottom="1.75rem"
          paddingX="1.25rem"
          gap="1.75rem"
        >
          <Text fontSize="1.25rem" fontWeight="700" color="#444950">
            참여자 추가
          </Text>
          <AddMember
            members={DUMMY_MEMBERS}
            onAddName={handleAddName}
            onDeleteMember={handleDeleteMember}
          />
        </Stack>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default MemberBottomSheet;
