import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { Member } from '@/common/types/member.type';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import MemberProfile from '../MemberProfile';

const MemberSchema = z.object({
  name: z.string().trim().min(1),
});

interface AddMemberProps {
  members: Member[]; // (required) 멤버 목록
  setMembers?:
    | Dispatch<SetStateAction<Member[]>>
    | ((members: Member[]) => void); // (option) 멤버 목록을 직접 업데이트하는 함수
  onAddName?: (name: string) => void; // (option) 이름 입력 후 추가하기 버튼을 처리하는 함수
  onDeleteMember?: (id: number) => void; // (option) 멤버 삭제 버튼을 처리하는 함수
}

function AddMember({
  members,
  setMembers,
  onAddName,
  onDeleteMember,
}: AddMemberProps) {
  const { register, handleSubmit, clearErrors, formState, reset } = useForm({
    mode: 'onChange',
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: '',
    },
  });

  /** 이름 입력 후 추가 핸들러 */
  const handleAddName = (data: any) => {
    const { name } = data;
    // 이름 추가 핸들러가 있다면 실행
    if (onAddName) {
      onAddName(name);
    }

    // 새로운 참여자 생성 후 (필요한 경우) members 배열 직접 업데이트
    const newMember: Member = {
      id: Date.now(),
      name,
      role: 'PARTICIPANT',
      profile: defaultProfileImg,
      isPaid: false,
      paidAt: null,
    };

    setMembers?.([newMember, ...members]);

    // 초기화
    clearErrors('name');
    reset();
  };

  /** 참여자 제거 핸들러 */
  const handleDeleteMember = (id: number) => {
    // 멤버 삭제 핸들러가 있다면 실행
    if (onDeleteMember) {
      onDeleteMember(id);
    }

    // (필요한 경우) members 배열 직접 업데이트
    setMembers?.(members.filter((member) => member.id !== id));
  };

  return (
    <Flex direction="column" height="fit-content">
      <form onSubmit={handleSubmit(handleAddName)}>
        <Flex gap={2} alignItems="center">
          <Input
            borderRadius={12}
            placeholder="참가자를 입력해주세요"
            fontSize={16}
            py={3}
            height={12}
            {...register('name', {
              required: '이름을 입력해주세요',
            })}
          />
          <Button
            type="submit"
            fontSize={16}
            borderRadius={12}
            backgroundColor="#e6e6e6"
            color="black"
            fontWeight={400}
            px={5}
            textAlign="center"
            lineHeight={1.5}
            py={2}
            height={12}
            disabled={!formState.isValid}
          >
            추가하기
          </Button>
        </Flex>
      </form>
      <Flex direction="column" gap={2} mt={7}>
        <Text
          display="flex"
          alignItems="center"
          whiteSpace="pre-wrap"
          fontWeight={600}
        >
          총 <Text>{members.length}</Text>명
        </Text>
        <Flex gap={3} flexWrap="wrap">
          {members.map((member) => (
            <MemberProfile
              key={member.id}
              member={member}
              handleDeleteButtonClick={handleDeleteMember}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddMember;
