import { Dispatch, SetStateAction } from 'react';
import { Text, Stack } from '@chakra-ui/react';
import AddMember from '@/common/components/AddMember';
import { Member } from '@/common/types/member.type';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import BottomSheet from '@/common/components/BottomSheet';

const DUMMY_MEMBERS: Member[] = [
  {
    id: 1,
    role: 'MANAGER',
    name: '김모또',
    profile: defaultProfileImg,
    isPaid: true,
    paidAt: null,
  },
  {
    id: 2,
    role: 'PARTICIPANT',
    name: '김반숙',
    profile: defaultProfileImg,
    isPaid: false,
    paidAt: null,
  },
  {
    id: 3,
    role: 'PARTICIPANT',
    name: '정에그',
    profile: defaultProfileImg,
    isPaid: false,
    paidAt: null,
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

  const handleDeleteMember = (memberId: number) => {
    // TODO : 참여자 삭제 API 호출
    console.log('참여자 삭제: ', memberId);
  };

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
        <AddMember
          members={DUMMY_MEMBERS}
          onAddName={handleAddName}
          onDeleteMember={handleDeleteMember}
        />
      </Stack>
    </BottomSheet>
  );
}

export default MemberBottomSheet;
