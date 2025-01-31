import styled from 'styled-components';

function Layout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  overflow-x: hidden;
  max-width: 600px;
  min-width: 320px;
  height: auto;
  width: 100%;
  background-color: white;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default Layout;
