import { useMutation, useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';

const useDeleteGroupMember = (groupToken: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: groupMembers.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groupBasicInfo', groupToken],
      });
    },
    onError: (error) => {
      console.error('useDeleteGroupMember: ', error);
    },
  });

  return mutation;
};

export default useDeleteGroupMember;
