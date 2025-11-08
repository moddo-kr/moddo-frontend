import * as S from './index.styles';

function Layout({ children }: { children: React.ReactNode }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Layout;
