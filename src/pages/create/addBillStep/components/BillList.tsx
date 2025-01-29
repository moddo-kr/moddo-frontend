import BillFormCard from './BillFormCard';
import * as S from '../styles/BillList.styles';

function BillList() {
  // TODO: 스크롤 액션 추가해야 할 수 있음
  return (
    <S.BillList>
      <BillFormCard />
    </S.BillList>
  );
}

export default BillList;
