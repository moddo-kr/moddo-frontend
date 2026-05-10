import { useState } from 'react';
import { showToast } from '@/shared/ui/Toast';
import copyClipboard from '@/shared/lib/copyClipboard';
import initKakaoSDK from '../lib/initKakaoSDK';
import { shareDataFormat, shareMessageFormat } from '../lib/shareFormat';
import shareKakaoLib from '../lib/shareKakao';

function useShareLink(shareLink: string) {
  const [isOpen, setIsOpen] = useState(false);

  const shareData = shareDataFormat(shareLink);
  const shareMessage = shareMessageFormat(shareLink);

  const doCopy = () =>
    copyClipboard(shareMessage)
      .then((isCopied) => {
        if (isCopied) {
          showToast({ type: 'success', content: '링크 복사 완료!' });
          return true;
        }
        showToast({ type: 'error', content: '링크 복사 실패!' });
        return false;
      })
      .catch(() => {
        showToast({ type: 'error', content: '링크 복사 실패!' });
        return false;
      });

  const startShare = () => {
    doCopy().finally(() => setIsOpen(true));
  };

  const close = () => setIsOpen(false);

  const copyLink = () => {
    doCopy().finally(() => setIsOpen(false));
  };

  const shareKakao = async () => {
    try {
      await initKakaoSDK();
      shareKakaoLib(shareData);
      setIsOpen(false);
    } catch {
      showToast({ type: 'error', content: '카카오 공유에 실패했습니다.' });
    }
  };

  const shareSlack = () => {
    doCopy()
      .then((isCopied) => {
        if (isCopied) {
          window.open('slack://open', '_blank');
        }
      })
      .finally(() => setIsOpen(false));
  };

  return { isOpen, close, copyLink, startShare, shareKakao, shareSlack };
}

export { useShareLink };
