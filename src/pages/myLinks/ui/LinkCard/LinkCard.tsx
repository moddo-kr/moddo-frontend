import SvgCopy from '@/shared/assets/svgs/icon/Copy';
import copyClipboard from '@/shared/lib/copyClipboard';
import { showToast } from '@/shared/ui/Toast';
import * as S from './LinkCard.styles';

interface LinkCardProps {
  name: string;
  url: string;
}

async function handleCopy(url: string) {
  try {
    const isCopied = await copyClipboard(url);
    if (isCopied) {
      showToast({ type: 'success', content: '링크 복사 완료!' });
    } else {
      showToast({ type: 'error', content: '링크 복사에 실패했습니다.' });
    }
  } catch {
    showToast({ type: 'error', content: '링크 복사에 실패했습니다.' });
  }
}

function LinkCard({ name, url }: LinkCardProps) {
  return (
    <S.Container>
      <S.Label>{name}</S.Label>
      <S.LinkField>
        <S.LinkText>{url}</S.LinkText>
        <S.CopyButton
          type="button"
          onClick={() => handleCopy(url)}
          aria-label="링크 복사"
        >
          <SvgCopy width={16} height={16} />
        </S.CopyButton>
      </S.LinkField>
    </S.Container>
  );
}

export { LinkCard };
export type { LinkCardProps };
