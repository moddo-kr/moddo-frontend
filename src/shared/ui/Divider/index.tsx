import * as S from './index.style';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
}

function Divider({ height = 8, ...props }: DividerProps) {
  return <S.Divider height={height} {...props} />;
}

export default Divider;
