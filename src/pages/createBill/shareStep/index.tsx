import { useEffect } from 'react';
import Link from '@/assets/pngs/Link.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/assets/svgs/icon';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import DescriptionField from '@/common/components/DescriptionField';
import Header from '@/common/components/Header';
import Button from '@/common/components/Button';
import ButtonGroup from '@/common/components/ButtonGroup';
import Text from '@/common/components/Text';
import initKakaoSDK from '@/common/utils/initKakaoSDK';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { BillContext } from '../types/billContext.type';
import ShareButton from './components/ShareButton';
import * as S from './index.styles';

const DUMMY_LINK = 'http://localhost:3000/home';

interface ShareStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ShareStep({ moveToPreviousStep }: ShareStepProps) {
  useEffect(() => {
    initKakaoSDK();
  }, []);

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width="1.5rem" />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={() => {
          moveToPreviousStep?.();
        }}
        rightButtonContent={<Text>QR코드 만들기</Text>}
      />
      <DescriptionField
        title={`참여자에게 링크를\n공유하면 요청이 완료돼요!`}
      />
      <S.ImageWrapper>
        <S.LinkImg src={Link} alt="링크" />
        <S.HamImg src={LoginHamImg} alt="정산햄" />
      </S.ImageWrapper>
      {/* <S.ButtonWrapper>
        <ShareButton shareLink={DUMMY_LINK} />
        <S.BottomLink to="/home">정산 내역 확인하기</S.BottomLink>
      </S.ButtonWrapper> */}
      <BottomButtonContainer>
        <ButtonGroup direction="vertical">
          <Button>링크 공유하기</Button>
          <Button size="sm" variant="tertiary">
            정산 내역 확인하기
          </Button>
        </ButtonGroup>
      </BottomButtonContainer>
    </>
  );
}

export default ShareStep;
