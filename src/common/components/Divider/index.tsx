import * as S from './index.style';

interface DividerProps {
  height?: number;
}

function Divider({ height = 8 }: DividerProps) {
  return <S.Divider height={height} />;
}

export default Divider;
