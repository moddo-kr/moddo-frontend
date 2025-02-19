import { useEffect } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import Link from '@/assets/pngs/Link.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
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
          <Flex alignItems="center">
            <ArrowLeft width="1.5rem" />
            <Text fontSize="1rem" color="#444950">
              뒤로가기
            </Text>
          </Flex>
        }
        leftButtonOnClick={() => {
          moveToPreviousStep?.();
        }}
        rightButtonContent={
          <Text fontSize="1rem" color="#444950">
            QR코드 만들기
          </Text>
        }
      />
      <Stack flex={1}>
        <S.TopWrapper>
          <S.TopMessage>
            {`참여자에게 링크를\n공유하면 요청이 완료돼요!`}
          </S.TopMessage>
        </S.TopWrapper>
        <Stack gap="-1" alignItems="center" justifyContent="center" flex={1}>
          <S.LinkImg src={Link} alt="링크" />
          <S.HamImg src={LoginHamImg} alt="정산햄" />
        </Stack>
      </Stack>
      <S.ButtonWrapper>
        <ShareButton shareLink={DUMMY_LINK} />
        {/* TODO : 실제 정산 내역 페이지 링크를 연결해야 함. */}
        <S.BottomLink to="/home">정산 내역 확인하기</S.BottomLink>
      </S.ButtonWrapper>
    </>
  );
}

export default ShareStep;
