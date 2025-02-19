import { useMutation, useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';

const useAddGroupMember = (groupToken: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: groupMembers.put,
    onSuccess: () => {
      // NOTE : 더 좋은 방법이 있을지 고민해봐야 할 것 같아요...
      queryClient.invalidateQueries({
        queryKey: ['groupBasicInfo', groupToken],
      });
    },
    onError: (error) => {
      console.error('Error adding group member:', error);
    },
  });
};

export default useAddGroupMember;
