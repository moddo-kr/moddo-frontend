import { VStack } from '@chakra-ui/react';
import BillList from './components/BillList';
import * as S from './styles/index.styles';

function AddBillStep() {
  return (
    <VStack align="flex-start">
      {/* TODO : VStack: 정산 시작 step 공통 레이아웃 적용 전 임시 레이아웃 */}
      <S.Header>
        <S.HeaderButton>지출 추가</S.HeaderButton>
      </S.Header>
      <S.TopWrapper>
        <S.MoimName>모임 이름</S.MoimName>
        <S.TopMessage>{`의\n지출 내역을 입력해주세요.`}</S.TopMessage>
      </S.TopWrapper>
      <BillList />
    </VStack>
  );
}

export default AddBillStep;
