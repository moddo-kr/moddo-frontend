import { useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';
import useMutationWithHandlers from '@/common/hooks/useMutationWithHanders';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';

const useAddGroupMember = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers({
    mutationFn: groupMembers.put,
    onSuccess: () => {
      // NOTE : 더 좋은 방법이 있을지 고민해봐야 할 것 같아요...
      queryClient.invalidateQueries({
        queryKey: ['groupBasicInfo', groupToken],
      });
    },
    errorHandlers,
    noBoundaryErrors,
  });
};

export default useAddGroupMember;
