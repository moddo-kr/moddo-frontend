import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { Flex, Stack, Text } from '@chakra-ui/react';
import Link from '@/assets/pngs/Link.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import Header from '@/common/components/Header';
import { ArrowLeft } from '@/assets/svgs/icon';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';

interface ShareStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ShareStep({ moveToPreviousStep }: ShareStepProps) {
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
        <S.BottomButton>링크 공유하기</S.BottomButton>
        <S.BottomSubButton>정산 내역 확인하기</S.BottomSubButton>
      </S.ButtonWrapper>
    </>
  );
}

export default ShareStep;
