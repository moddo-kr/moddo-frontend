import { ROUTE } from '@/common/constants/route';
import groupMembers, {
  CreateGroupMembersVariable,
} from '@/service/apis/groupMembers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

interface groupMembersData {
  id: number;
  role: 'MANAGER' | 'PARTICIPANT';
  name: string;
  profile: string;
  isPaid: boolean;
  paidAt: Date | null;
}

const useCreateGroupMembers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<groupMembersData[], Error, CreateGroupMembersVariable[]>({
    mutationFn: (variable) => groupMembers.post(variable),
    onSuccess: (data) => {
      // groupMembers 키에 데이터를 저장
      queryClient.setQueryData(['groupMembers'], data);
      navigate(ROUTE.createBill);
    },
    onError: (error) => {
      console.error('Error creating group members:', error);
      alert('그룹 멤버 생성에 실패했습니다.');
    },
  });
};

export default useCreateGroupMembers;
