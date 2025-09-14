import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Member } from '@/shared/types/member.type';
import Text from '@/shared/components/Text';
import MemberProfile from '@/shared/components/MemberProfile';
import InputGroup from '@/shared/components/InputGroup';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';
import Flex from '@/shared/components/Flex';
import { showToast } from '@/shared/components/Toast';
import useAddGroupMember from './api/useAddGroupMember';
import useDeleteGroupMember from './api/useDeleteGroupMember';
import * as S from './index.styles';

const MemberSchema = z.object({
  name: z.string().trim().min(1),
});

interface AddMemberProps {
  members: Member[]; // (required) 멤버 목록
  groupToken: string;
}

function AddMember({ members, groupToken }: AddMemberProps) {
  const deleteMutation = useDeleteGroupMember(
    groupToken,
    {
      // 총무를 모임에서 제거하려고 할 때 발생하는 에러
      400: () => {
        showToast({
          type: 'error',
          content: '총무는 모임에서 제외할 수 없어요.',
        });
      },
    },
    [400]
  );
  const { register, handleSubmit, clearErrors, formState, reset } = useForm({
    mode: 'onChange',
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: '',
    },
  });
  const addMutation = useAddGroupMember(
    groupToken,
    {
      409: () =>
        showToast({
          type: 'error',
          content:
            '이미 같은 이름의 참여자가 있어요. 다른 이름으로 입력해 주세요.',
        }),
    },
    [409]
  );

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
