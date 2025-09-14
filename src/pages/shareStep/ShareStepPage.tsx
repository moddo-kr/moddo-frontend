import { useEffect } from 'react';
import { generatePath, useLoaderData, useNavigate } from 'react-router';
import Link from '@/shared/assets/pngs/Link.png';
import LoginHamImg from '@/shared/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import { ROUTE } from '@/shared/config/route';
import DescriptionField from '@/shared/components/DescriptionField';
import Header from '@/shared/components/Header';
import Button from '@/shared/components/Button';
import ButtonGroup from '@/shared/components/ButtonGroup';
import Text from '@/shared/components/Text';
import initKakaoSDK from '@/shared/utils/initKakaoSDK';
import generateShareLink from '@/shared/utils/generateShareLink';
import ShareButton from '@/shared/components/ShareButton';
import * as S from './ShareStepPage.styles';

interface ShareStepProps {
  onNext: () => void;
  onBack: () => void;
}

function ShareStepPage({ onNext, onBack }: ShareStepProps) {
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
        leftButtonOnClick={onBack}
        rightButtonContent={<Text>QR코드 만들기</Text>}
        rightButtonOnClick={onNext}
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

export default ShareStepPage;
