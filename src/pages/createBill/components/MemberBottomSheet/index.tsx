import { Dispatch, SetStateAction } from 'react';
import { useLoaderData } from 'react-router';
import { Text } from '@chakra-ui/react';
import BottomSheet from '@/common/components/BottomSheet';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';
import { Group } from '@/common/types/group.type';
import Flex from '@/common/components/Flex';

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
  const { data, isLoading, isError } = useGetGroupBasicInfo(
    groupToken,
    {
      // 총무가 아닌 토큰으로 모임 정보를 요청하는 경우
      // NOTE - API 문서에는 403 에러로 되어 있지만 실제로는 500 에러가 발생함
      // 403: () => {
      //   throw new BoundaryError({
      //     title: '접근 권한이 없어요',
      //     description: '모임의 총무만 참여자를 추가할 수 있어요.',
      //   });
      // },
    },
    [403]
  );

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
      <Flex
        direction="column"
        paddingTop="2rem"
        paddingBottom="1.75rem"
        px="1.25rem"
        gap="1.75rem"
        width="100%"
      >
        <Text fontSize="1.25rem" fontWeight="700" color="#444950">
          참여자 추가
        </Text>
      </Flex>
    </BottomSheet>
  );
}

export default MemberBottomSheet;
