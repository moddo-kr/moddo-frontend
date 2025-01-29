import * as S from '../styles/BillFormCard.styles';

function BillFormCard() {
  return (
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
  );
}

export default BillFormCard;
