import { useQueryClient } from '@tanstack/react-query';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import groupMembers from '@/entities/group/api/groupMembers';

const useAddGroupMember = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
) => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers({
    mutationFn: groupMembers.post,
    onSuccess: () => {
      // NOTE : 더 좋은 방법이 있을지 고민해봐야 할 것 같아요...
      queryClient.invalidateQueries({
        queryKey: ['groupDetail', groupToken],
      });
    },
    errorHandlers,
    ignoreBoundaryErrors,
  });
};

export default useAddGroupMember;
