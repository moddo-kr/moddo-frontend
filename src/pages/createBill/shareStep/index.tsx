import { useEffect } from 'react';
import { generatePath, useLoaderData, useNavigate } from 'react-router';
import Link from '@/assets/pngs/Link.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/assets/svgs/icon';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import { ROUTE } from '@/common/constants/route';
import DescriptionField from '@/common/components/DescriptionField';
import Header from '@/common/components/Header';
import Button from '@/common/components/Button';
import ButtonGroup from '@/common/components/ButtonGroup';
import Text from '@/common/components/Text';
import initKakaoSDK from '@/common/utils/initKakaoSDK';
import generateShareLink from '@/common/utils/generateShareLink';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { BillContext } from '../types/billContext.type';
import ShareButton from './components/ShareButton';
import * as S from './index.styles';

interface ShareStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ShareStep({ moveToPreviousStep }: ShareStepProps) {
  const { groupToken } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    initKakaoSDK();
  }, []);

  const shareLink = generateShareLink(groupToken);

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
      <BottomButtonContainer>
        <ButtonGroup direction="vertical">
          <ShareButton shareLink={shareLink} />
          <Button
            size="sm"
            variant="tertiary"
            onClick={() =>
              navigate(generatePath(ROUTE.billDetail, { groupToken }))
            }
          >
            정산 내역 확인하기
          </Button>
        </ButtonGroup>
      </BottomButtonContainer>
    </>
  );
}

export default ShareStep;
