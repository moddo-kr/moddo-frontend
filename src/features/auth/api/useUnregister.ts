import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTE } from '@/shared/config/route';
import { unregister } from './authApi';

export const useUnregister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: unregister,
    onSuccess: () => {
      queryClient.clear();
      navigate(ROUTE.login);
    },
  });
};
