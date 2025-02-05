import { GoBackIcon } from '@/assets/svgs';
import * as S from '@/common/components/Header/index.styles';

export interface HeaderProps {
  title: string;
  showIcon: boolean;
  type: 'TitleLeft' | 'TitleCenter';
  handleBackButtonClick?: () => void;
}

function Header({ title, showIcon, type, handleBackButtonClick }: HeaderProps) {
  switch (type) {
    case 'TitleLeft':
      return (
        <S.LeftHeaderArea>
          <S.IconWrapper>
            {showIcon ? (
              <GoBackIcon
                onClick={handleBackButtonClick}
                width={8}
                height={16}
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
          <S.IconWrapper>
            {showIcon ? (
              <GoBackIcon
                onClick={handleBackButtonClick}
                width={8}
                height={16}
              />
            ) : (
              <S.DummyIcon />
            )}
          </S.IconWrapper>
          <S.CenterTitleArea>{title}</S.CenterTitleArea>
        </S.CenterHeaderArea>
      );
    default:
      return null;
  }
}

export default Header;
