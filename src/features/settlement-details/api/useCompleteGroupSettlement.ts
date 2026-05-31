import { useMutation, useQueryClient } from '@tanstack/react-query';
import { completeGroupSettlement } from '@/entities/group/api/group';

export const useCompleteGroupSettlement = (groupToken: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => completeGroupSettlement(groupToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groupHeader', groupToken] });
      queryClient.invalidateQueries({ queryKey: ['settlementList'] });
    },
  });
};
