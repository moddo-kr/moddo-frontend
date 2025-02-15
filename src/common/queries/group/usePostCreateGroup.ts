import { ROUTE } from '@/common/constants/route';
import { CreateGroupData, postCreateGroup } from '@/service/apis/group';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

interface CreateGroupVariables {
  groupToken: string;
}

export const usePostCreateGroup = () => {
  const navigate = useNavigate();
  return useMutation<CreateGroupVariables, Error, CreateGroupData>({
    mutationFn: (newGroup) => postCreateGroup(newGroup),
    onSuccess: (response) => {
      localStorage.setItem('groupToken', response?.groupToken);
      navigate(ROUTE.groupSetupMember);
    },
    onError: (error) => {
      alert('groupToken 발급에 실패했습니다!');
      console.error('Error:', error);
    },
  });
};
