import * as S from './index.styles';

function TermsLink() {
  // TODO: 이용약관 페이지로 이동하도록 수정
  return (
    <S.Link href="#" onClick={(e) => e.preventDefault()}>
      이용약관
    </S.Link>
  );
}

export default TermsLink;
