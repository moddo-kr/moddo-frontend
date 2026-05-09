import SvgCopy from '@/shared/assets/svgs/icon/Copy';
import * as S from './LinkCard.styles';

interface LinkCardProps {
  label: string;
  link: string;
  onCopy: () => void;
}

function LinkCard({ label, link, onCopy }: LinkCardProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.LinkField>
        <S.LinkText>{link}</S.LinkText>
        <S.CopyButton type="button" onClick={onCopy} aria-label="링크 복사">
          <SvgCopy width={16} height={16} />
        </S.CopyButton>
      </S.LinkField>
    </S.Container>
  );
}

export { LinkCard };
export type { LinkCardProps };
