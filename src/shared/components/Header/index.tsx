import { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Button from '@/shared/components/Button';
import * as S from '@/shared/components/Header/index.styles';

export interface HeaderProps {
  title?: string;
  showIcon?: boolean; // FIXME : 타입 오류를 방지하기 위해 남겨둠. 수정 필요함
  leftButtonContent?: ReactElement;
  rightButtonContent?: ReactElement;
  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;
  type: 'TitleLeft' | 'TitleCenter';
  handleBackButtonClick?: () => void; // FIXME : 타입 오류를 방지하기 위해 남겨둠. 수정 필요함
  bgColor?: string;
}

function Header({
  title,
  showIcon,
  type,
  handleBackButtonClick,
  leftButtonContent,
  rightButtonContent,
  leftButtonOnClick,
  rightButtonOnClick,
  bgColor,
}: HeaderProps) {
  const theme = useTheme();

  switch (type) {
    case 'TitleLeft':
      return (
        <S.LeftHeaderArea $bgColor={bgColor}>
          <S.IconWrapper>
            {showIcon ? (
              <ArrowLeft
                onClick={handleBackButtonClick}
                width={theme.unit[24]}
                height={theme.unit[24]}
              />
            ) : (
              <S.DummyIcon />
            )}
          </S.IconWrapper>
          <S.TitleArea>{title}</S.TitleArea>
        </S.LeftHeaderArea>
      );
    case 'TitleCenter':
      return (
        <S.CenterHeaderArea $bgColor={bgColor}>
          {leftButtonContent ? (
            <Button variant="text" onClick={leftButtonOnClick}>
              {leftButtonContent}
            </Button>
          ) : (
            <S.DummyIcon />
          )}
          <S.CenterTitleArea>{title}</S.CenterTitleArea>
          {rightButtonContent ? (
            <Button variant="text" onClick={rightButtonOnClick}>
              {rightButtonContent}
            </Button>
          ) : (
            <S.DummyIcon />
          )}
        </S.CenterHeaderArea>
      );
    default:
      return null;
  }
}

export default Header;
