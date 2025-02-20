import { useMutation, useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';

const useDeleteGroupMember = (groupToken: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: groupMembers.delete,
    onSuccess: () => {
      // FIXME : 삭제 결과가 바로 적용되지 않는 문제가 있음.
      queryClient.invalidateQueries({
        queryKey: ['groupMembers', groupToken],
      });
    },
    onError: (error) => {
      console.error('useDeleteGroupMember: ', error);
    },
  });

  return mutation;
};

export default useDeleteGroupMember;
