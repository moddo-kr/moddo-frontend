import {
  SystemDanger,
  SystemInfo,
  SystemSuccess,
  SystemWarning,
} from '@/assets/svgs/icon';
import { Container } from './index.style';
import { toast, ToastContainerProps } from 'react-toastify';
interface ToastProps {
  type: 'info' | 'error' | 'success' | 'warning';
  content: string;
}

/** 기존 toastContainer에서 사용되는 옵션 */
const toastOptions: ToastContainerProps = {
  position: 'bottom-center',
  autoClose: 500, //500ms
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
  }
}

export default function Toast() {
  return <Container />;
}
