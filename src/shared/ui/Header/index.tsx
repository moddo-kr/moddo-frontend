import { ReactElement } from 'react';
import Button from '@/shared/ui/Button';
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
  type?: 'default';
  title?: string | ReactElement;
  showHeading?: boolean;
  headingIcon?: ReactElement;
  headingLabel?: string;
  headingSubIcon?: ReactElement;
  onHeadingIconClick?: () => void;
  onHeadingSubIconClick?: () => void;
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
        <Button variant="text" onClick={onTrailingIconClick}>
          {trailingIcon}
        </Button>
      )}
      {trailingSubIcon && (
        <Button variant="text" onClick={onTrailingSubIconClick}>
          {trailingSubIcon}
        </Button>
      )}
    </S.TrailingArea>
  );
}

function DefaultHeader({
  bgColor,
  showHeading = true,
  headingIcon,
  headingLabel,
  headingSubIcon,
  onHeadingIconClick,
  onHeadingSubIconClick,
  ...trailingProps
}: DefaultHeaderProps) {
  return (
    <S.DefaultHeaderArea $bgColor={bgColor}>
      {showHeading ? (
        <S.HeadingArea>
          {headingIcon && (
            <Button variant="text" onClick={onHeadingIconClick}>
              {headingIcon}
            </Button>
          )}
          {headingSubIcon && (
            <Button variant="text" onClick={onHeadingSubIconClick}>
              {headingSubIcon}
            </Button>
          )}
          {headingLabel && <span>{headingLabel}</span>}
        </S.HeadingArea>
      ) : (
        <S.HeadingArea aria-hidden />
      )}
      <S.DefaultTitleArea>{title}</S.DefaultTitleArea>
      <TrailingSection {...trailingProps} />
    </S.DefaultHeaderArea>
  );
}

function Depth1Header({ title, bgColor, ...trailingProps }: Depth1HeaderProps) {
  return (
    <S.Depth1HeaderArea $bgColor={bgColor}>
      <S.Depth1TitleArea>{title}</S.Depth1TitleArea>
      <TrailingSection {...trailingProps} />
    </S.Depth1HeaderArea>
  );
}

function Header({ type, ...rest }: HeaderProps) {
  switch (type) {
    case '1depth':
      return <Depth1Header type={type} {...rest} />;
    default:
      return <DefaultHeader type={type} {...rest} />;
  }
}

export default Header;
