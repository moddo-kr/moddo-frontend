import { VStack } from '@chakra-ui/react';
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
      <S.BillListWrapper>
        <S.BillFormCard>
          <S.BillFormCardTitle>1차</S.BillFormCardTitle>
          <S.BillFormField required>
            <S.BillFormFieldLabel>
              결제 금액
              <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
            </S.BillFormFieldLabel>
            <S.BillFormFieldInput />
          </S.BillFormField>
          <S.BillFormField required>
            <S.BillFormFieldLabel>
              지출 장소 및 내용
              <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
            </S.BillFormFieldLabel>
            <S.BillFormFieldInput placeholder="ex. 투썸플레이스" />
          </S.BillFormField>
          <S.BillFormField>
            <S.BillFormFieldLabel>지출일</S.BillFormFieldLabel>
            <S.BillFormFieldInput />
          </S.BillFormField>
          <S.BillFormField>
            <S.BillFormFieldLabel>참여자</S.BillFormFieldLabel>
            <S.BillFormFieldInput />
          </S.BillFormField>
        </S.BillFormCard>
      </S.BillListWrapper>
    </VStack>
  );
}

export default AddBillStep;
