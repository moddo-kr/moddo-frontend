import { CreateGroupData } from '@/entities/group/model/group.type';
import group from '@/entities/group/api/group';
import { useMutation } from '@tanstack/react-query';

interface CreateGroupVariables {
  groupToken: string;
}

export const usePostCreateGroup = () => {
  return useMutation<CreateGroupVariables, Error, CreateGroupData>({
    mutationFn: (newGroup) => group.post(newGroup),
    onSuccess: (response) => {
      localStorage.setItem('groupToken', response?.groupToken);
    },
  });
};
