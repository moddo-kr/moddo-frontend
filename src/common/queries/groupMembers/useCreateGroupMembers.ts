import { ROUTE } from '@/common/constants/route';
import { Member } from '@/common/types/member.type';
import groupMembers, {
  CreateGroupMembersVariable,
} from '@/service/apis/groupMembers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const usePostCreateGroupMembers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<Member[], Error, CreateGroupMembersVariable[]>({
    mutationFn: (variable) => groupMembers.post(variable),
    onSuccess: (data) => {
      // groupMembers 키에 데이터를 저장
      queryClient.setQueryData(['createGroupMembers'], data);
      navigate(ROUTE.createBill);
    },
    onError: (error) => {
      console.error('Error creating group members:', error);
    },
  });
};

export default usePostCreateGroupMembers;
