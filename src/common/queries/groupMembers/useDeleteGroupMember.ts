import { useMutation, useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';
import useMutationWithHandlers from '@/common/hooks/useMutationWithHanders';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';

const useDeleteGroupMember = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  const queryClient = useQueryClient();
  const mutation = useMutationWithHandlers({
    mutationFn: groupMembers.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groupBasicInfo', groupToken],
      });
    },
    errorHandlers,
    noBoundaryErrors,
  });

  return mutation;
};

export default useDeleteGroupMember;
