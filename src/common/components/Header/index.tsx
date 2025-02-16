import { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import * as S from '@/common/components/Header/index.styles';

export interface HeaderProps {
  title?: string;
  showIcon?: boolean; // FIXME : 타입 오류를 방지하기 위해 남겨둠. 수정 필요함
  leftButtonContent?: ReactElement;
  rightButtonContent?: ReactElement;
  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;
  type: 'TitleLeft' | 'TitleCenter';
  handleBackButtonClick?: () => void; // FIXME : 타입 오류를 방지하기 위해 남겨둠. 수정 필요함
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
}: HeaderProps) {
  const theme = useTheme();

  switch (type) {
    case 'TitleLeft':
      return (
        <S.LeftHeaderArea>
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
        <S.CenterHeaderArea>
          {leftButtonContent ? (
            <S.IconWrapper onClick={leftButtonOnClick}>
              {leftButtonContent}
            </S.IconWrapper>
          ) : (
            <S.DummyIcon />
          )}
          <S.CenterTitleArea>{title}</S.CenterTitleArea>
          {rightButtonContent ? (
            <S.IconWrapper onClick={rightButtonOnClick}>
              {rightButtonContent}
            </S.IconWrapper>
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
