import * as S from './styles/index.styles';

function AddBillStep() {
  return (
    <div>
      <S.Header>
        <S.HeaderButton>지출 추가</S.HeaderButton>
      </S.Header>
      <S.TopWrapper>
        <S.MoimName>모임 이름</S.MoimName>
        <S.TopMessage>{`의\n지출 내역을 입력해주세요.`}</S.TopMessage>
      </S.TopWrapper>
    </div>
  );
}

export default AddBillStep;
