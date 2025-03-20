import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex } from '@chakra-ui/react';
import { Member } from '@/common/types/member.type';
// import { useLoaderData } from 'react-router';
import useAddGroupMember from '@/common/queries/groupMembers/useAddGroupMember';
import useDeleteGroupMember from '@/common/queries/groupMembers/useDeleteGroupMember';
import Text from '../Text';
import MemberProfile from '../MemberProfile';
import InputGroup from '../InputGroup';
import Input from '../Input';
import Button from '../Button';
import * as S from './index.styles';

const MemberSchema = z.object({
  name: z.string().trim().min(1),
});

interface AddMemberProps {
  members: Member[]; // (required) 멤버 목록
  groupToken: string;
}

function AddMember({ members, groupToken }: AddMemberProps) {
  const addMutation = useAddGroupMember(groupToken);
  const deleteMutation = useDeleteGroupMember(groupToken);
  const { register, handleSubmit, clearErrors, formState, reset } = useForm({
    mode: 'onChange',
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: '',
    },
  });

  /** 이름 입력 후 추가 핸들러 */
  const handleAddName = (data: { name: string }) => {
    const { name } = data;
    addMutation.mutate({
      groupToken,
      groupMemberData: {
        name,
        role: 'PARTICIPANT',
      },
    });

    // 초기화
    clearErrors('name');
    reset();
  };

  /** 참여자 제거 핸들러 */
  const handleDeleteMember = (id: number) => {
    deleteMutation.mutate({ groupToken, groupMemberId: id });
  };

  return (
    <Flex direction="column" height="fit-content">
      <form onSubmit={handleSubmit(handleAddName)}>
        <Flex gap={2} alignItems="center">
          <InputGroup>
            <Input
              placeholder="이정산"
              {...register('name', {
                required: '이름을 입력해주세요',
              })}
            />
            <Button
              type="submit"
              variant="secondary"
              size="md"
              disabled={!formState.isValid}
            >
              추가하기
            </Button>
          </InputGroup>
        </Flex>
      </form>
      <Flex direction="column" gap={2} mt={7}>
        <S.MemberCount>
          총{' '}
          <Text variant="body1Sb" color="semantic.orange.default">
            {members.length}
          </Text>
          명
        </S.MemberCount>
        <Flex gap={3} flexWrap="wrap">
          {members.map((member, index) => (
            <MemberProfile
              key={member.id}
              member={member}
              index={index}
              handleDeleteButtonClick={handleDeleteMember}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddMember;
