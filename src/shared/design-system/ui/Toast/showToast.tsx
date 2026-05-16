import { toast } from 'react-toastify';
import { Toast, ToastType } from './Toast';

interface ShowToastProps {
  type: ToastType;
  content: string;
}

/** 기존 toastContainer에서 사용되는 옵션 */
const toastOptions = {
  position: 'bottom-center' as const,
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
export function showToast({ type, content }: ShowToastProps) {
  toast(<Toast type={type} message={content} />, toastOptions);
}
