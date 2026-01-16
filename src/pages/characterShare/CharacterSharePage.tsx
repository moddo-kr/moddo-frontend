import { useNavigate } from 'react-router';
import Button from '@/shared/ui/Button';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import AsyncBoundary from '@/shared/ui/AsyncBoundary';
import CharacterContent from './ui/CharacterContent';

function CharacterSharePage() {
  const navigate = useNavigate();
  const { unit } = useTheme();

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width={unit[24]} />}
        leftButtonOnClick={() => {
          navigate(-1);
        }}
        bgColor="semantic.background.normal.alternative"
      />
      <AsyncBoundary>
        <CharacterContent />
      </AsyncBoundary>
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        {/* TODO : 공유하기 기능 개발시 공유하기 버튼으로 변경 */}
        <Button onClick={() => navigate(-1)}>돌아가기</Button>
      </BottomButtonContainer>
    </>
  );
}

export default CharacterSharePage;
