import { ReactElement } from 'react';
import * as S from '@/shared/ui/Header/index.styles';

// 공통 trailing(우측) 영역
interface TrailingProps {
  showTrailing?: boolean;
  trailingLabel?: string;
  trailingIcon?: ReactElement;
  trailingSubIcon?: ReactElement;
  onTrailingIconClick?: () => void;
  onTrailingSubIconClick?: () => void;
}

// default: heading 영역(뒤로가기 등) + 중앙 타이틀 + trailing — 서브 페이지용
interface DefaultHeaderProps extends TrailingProps {
  type: 'default';
  title?: string;
  showHeading?: boolean;
  headingIcon?: ReactElement;
  headingLabel?: string;
  headingSubIcon?: ReactElement;
  onHeadingIconClick?: () => void;
  bgColor?: string;
}

// 1depth: 좌측 큰 타이틀/커스텀 요소 + trailing — 홈, 마이페이지 등 최상위 페이지용
interface Depth1HeaderProps extends TrailingProps {
  type: '1depth';
  title?: string | ReactElement;
  bgColor?: string;
}

export type HeaderProps = DefaultHeaderProps | Depth1HeaderProps;

function TrailingSection({
  showTrailing = true,
  trailingLabel,
  trailingIcon,
  trailingSubIcon,
  onTrailingIconClick,
  onTrailingSubIconClick,
}: TrailingProps) {
  if (!showTrailing) return null;
  if (!trailingLabel && !trailingIcon && !trailingSubIcon) return null;

  return (
    <S.TrailingArea>
      {trailingLabel && <span>{trailingLabel}</span>}
      {trailingIcon && (
        <S.IconButton onClick={onTrailingIconClick}>
          {trailingIcon}
        </S.IconButton>
      )}
      {trailingSubIcon && (
        <S.IconButton onClick={onTrailingSubIconClick}>
          {trailingSubIcon}
        </S.IconButton>
      )}
    </S.TrailingArea>
  );
}

function Header(props: HeaderProps) {
  const {
    type,
    title,
    bgColor,
    showTrailing,
    trailingLabel,
    trailingIcon,
    trailingSubIcon,
    onTrailingIconClick,
    onTrailingSubIconClick,
  } = props;

  const trailingProps: TrailingProps = {
    showTrailing,
    trailingLabel,
    trailingIcon,
    trailingSubIcon,
    onTrailingIconClick,
    onTrailingSubIconClick,
  };

  switch (type) {
    case 'default': {
      const {
        showHeading = true,
        headingIcon,
        headingLabel,
        headingSubIcon,
        onHeadingIconClick,
      } = props;

      return (
        <S.DefaultHeaderArea $bgColor={bgColor}>
          {showHeading && (headingIcon || headingLabel || headingSubIcon) ? (
            <S.HeadingArea>
              {headingIcon && (
                <S.IconButton onClick={onHeadingIconClick}>
                  {headingIcon}
                </S.IconButton>
              )}
              {headingSubIcon && <S.IconButton>{headingSubIcon}</S.IconButton>}
              {headingLabel && <span>{headingLabel}</span>}
            </S.HeadingArea>
          ) : (
            <div />
          )}
          <S.DefaultTitleArea>{title}</S.DefaultTitleArea>
          <TrailingSection {...trailingProps} />
        </S.DefaultHeaderArea>
      );
    }
    case '1depth':
      return (
        <S.Depth1HeaderArea $bgColor={bgColor}>
          <S.Depth1TitleArea>{title}</S.Depth1TitleArea>
          <TrailingSection {...trailingProps} />
        </S.Depth1HeaderArea>
      );
    default:
      return null;
  }
}

export default Header;
