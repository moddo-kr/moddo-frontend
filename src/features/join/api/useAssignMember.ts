import { useMutation, useQueryClient } from '@tanstack/react-query';
import { assignMember } from '@/entities/member/api/assignMember';

const useAssignMember = (groupToken: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (memberId: number) => assignMember(groupToken, memberId),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['profiles', groupToken] });
    },
  });
};

export default useAssignMember;
