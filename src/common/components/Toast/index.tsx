import {
  SystemDanger,
  SystemInfo,
  SystemSuccess,
  SystemWarning,
} from '@/assets/svgs/icon';
import { ToastContainerProps, toast } from 'react-toastify';
import { Container } from './index.style';
import { ToastProps } from './index.type';

/** 기존 toastContainer에서 사용되는 옵션 */
const toastOptions: ToastContainerProps = {
  position: 'bottom-center',
  autoClose: 500, // 500ms
  hideProgressBar: true,
  closeButton: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  pauseOnFocusLoss: true,
};

/**
 * toast를 호출하는 함수
 *
 * ex) showToast({type: 'success', content: '성공!'});
 */
export function showToast({ type, content }: ToastProps) {
  switch (type) {
    case 'info':
      toast.info(content, {
        ...toastOptions,
        icon: <SystemInfo />,
      });
      return;
    case 'error':
      toast.error(content, {
        ...toastOptions,
        icon: <SystemDanger />,
      });
      return;
    case 'success':
      toast.success(content, {
        ...toastOptions,
        icon: <SystemSuccess />,
      });
      return;
    case 'warning':
      toast.warning(content, {
        ...toastOptions,
        icon: <SystemWarning />,
      });
      return;
    default:
      toast.error('정해진 Toast 타입이 아닙니다!');
  }
}

export default function Toast() {
  return <Container />;
}
