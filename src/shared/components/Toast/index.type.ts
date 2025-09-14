export type ToastType = 'info' | 'error' | 'success' | 'warning';

export interface ToastProps {
  type: ToastType;
  content: string;
}
