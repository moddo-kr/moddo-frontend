import { match } from 'ts-pattern';
import { GoBackIcon } from '@/assets/svgs';
import * as S from '@/common/components/header/index.styles';

interface HeaderProps {
  title: string;
  showIcon: boolean;
  type: 'TitleLeft' | 'TitleCenter';
  handleBackButtonClick: () => void;
}

function Header({ title, showIcon, type, handleBackButtonClick }: HeaderProps) {
  return (
    <>
      {match(type)
        .with('TitleLeft', () => (
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
            <S.LeftTitleArea>{title}</S.LeftTitleArea>
          </S.LeftHeaderArea>
        ))
        .with('TitleCenter', () => (
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
        ))
        .otherwise(() => null)}
    </>
  );
}

export default Header;
