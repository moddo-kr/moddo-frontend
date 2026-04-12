import { useQueryClient } from '@tanstack/react-query';
import { assignMember } from '@/entities/member/api/assignMember';
import { MemberProfile } from '@/entities/member/model/member.type';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { showToast } from '@/shared/ui/Toast';

const useAssignMember = (groupToken: string) => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers<MemberProfile, Error, number>({
    mutationFn: (memberId: number) => assignMember(groupToken, memberId),
    onSuccess: (data) => {
      // 응답으로 받은 업데이트된 멤버 정보로 캐시를 직접 갱신 (리패치 없이 즉시 반영)
      queryClient.setQueryData<MemberProfile[]>(
        ['profiles', groupToken],
        (prev) => prev?.map((member) => (member.id === data.id ? data : member))
      );
    },
    // TODO: 에러 코드 확인 후 케이스별 메시지로 세분화 필요
    errorHandlers: {
      default: () =>
        showToast({
          type: 'error',
          content: '참여자 선택에 실패했어요. 다시 시도해 주세요.',
        }),
    },
    ignoreBoundaryErrors: [400, 409],
  });
};

export default useAssignMember;
