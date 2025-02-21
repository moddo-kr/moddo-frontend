import * as S from './index.style';

interface DividerProps {
  height?: number;
}

function Divider({ height = 8 }: DividerProps) {
  return (
    <div>
      <S.Divider height={height} />
    </div>
  );
}

export default Divider;
