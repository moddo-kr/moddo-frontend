import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Member } from '@/entities/member/model/member.type';
import { Button, Input, Profile, showToast } from '@/shared/design-system/ui';
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
    <S.AddMemberContainer>
      <form onSubmit={handleSubmit(handleAddName)}>
        <S.InputRow>
          <Input
            placeholder="이정산"
            {...register('name', {
              required: '이름을 입력해주세요',
            })}
          />
          <Button
            type="submit"
            variant="secondary"
            size="medium"
            disabled={!formState.isValid}
          >
            추가하기
          </Button>
        </S.InputRow>
      </form>
      <S.MemberListSection>
        <S.MemberCount>
          총 <S.MemberCountHighlight>{members.length}</S.MemberCountHighlight>명
        </S.MemberCount>
        <S.MemberChipList>
          {members.map((member) => (
            <Profile
              key={member.id}
              size="m"
              type={member.role === 'MANAGER' ? 'default' : 'delete'}
              label={member.name}
              src={member.profile}
              onDelete={
                member.role === 'MANAGER'
                  ? undefined
                  : () => handleDeleteMember(member.id)
              }
            />
          ))}
        </S.MemberChipList>
      </S.MemberListSection>
    </S.AddMemberContainer>
  );
}

export default AddMember;
