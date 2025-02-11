import { useLayoutEffect } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import Link from '@/assets/pngs/Link.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import copyClipboard from '@/common/utils/copyClipboard';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { BillContext } from '../types/billContext.type';
import ShareButton from './components/ShareButton';
import * as S from './index.styles';

const DUMMY_LINK = 'https://dnd.ac';

interface ShareStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ShareStep({ moveToPreviousStep }: ShareStepProps) {
  // TODO : Dummy link 대신 API로 받아온 링크로 변경해야 함.
  // NOTE : PC Safari에서는 권한 에러 발생함.
  // useLayoutEffect(() => {
  //   copyClipboard(DUMMY_LINK).then((isCopied) => {
  //     if (isCopied) alert('링크가 복사되었습니다.');
  //   });
  // }, [DUMMY_LINK]);

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
