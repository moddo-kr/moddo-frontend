import { useQueryClient } from '@tanstack/react-query';
import groupMembers from '@/service/apis/groupMembers';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';

const useDeleteGroupMember = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
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
    ignoreBoundaryErrors,
  });

  return mutation;
};

export default useDeleteGroupMember;
