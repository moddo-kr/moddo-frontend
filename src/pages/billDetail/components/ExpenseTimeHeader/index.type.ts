import ModdoFace from '@/shared/assets/pngs/moddoFace.png';
import CryingModdoFace from '@/shared/assets/pngs/CryingModdoFace.png';

export type StatusType = 'pending' | 'success' | 'failure';

export type StatusInfo = {
  message: string;
  image: string;
};

export const StatusContent: Record<StatusType, StatusInfo> = {
  pending: {
    message: '마감 전에 정산하면, 귀여운 캐릭터가 뿅!',
    image: ModdoFace,
  },
  success: {
    message: '정산, 완벽하게 클리어!',
    image: ModdoFace,
  },
  failure: {
    message: '정산 마감 시간이 초과되었어요',
    image: CryingModdoFace,
  },
};
