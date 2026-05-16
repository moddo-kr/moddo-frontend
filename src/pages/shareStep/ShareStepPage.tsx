import { generatePath, useLoaderData, useNavigate } from 'react-router';
import Link from '@/shared/assets/pngs/Link.png';
import LoginHamImg from '@/shared/assets/pngs/LoginHamImg.png';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { ROUTE } from '@/shared/config/route';
import {
  ActionArea,
  DescriptionField,
  Header,
} from '@/shared/design-system/ui';
import generateShareLink from '@/shared/lib/generateShareLink';
import { useShareLink, ShareModal } from '@/features/share';
import { PageLayout } from '@/shared/ui/PageLayout';
import { getToken } from '@/shared/design-system';
import * as S from './ShareStepPage.styles';

interface ShareStepProps {
  onNext: () => void;
  onBack: () => void;
}

function ShareStepPage({ onNext, onBack }: ShareStepProps) {
  const { groupToken } = useLoaderData();
  const navigate = useNavigate();

  const shareLink = generateShareLink(groupToken);
  const share = useShareLink(shareLink);

  return (
    <PageLayout $hasBottomFixedAction>
      <Header
        type="default"
        headingIcon={
          <ArrowLeft width="1.5rem" color={getToken('fg.alternative')} />
        }
        headingLabel="뒤로가기"
        onHeadingIconClick={onBack}
        trailingIcon={<S.QRCodeLabel>QR코드 만들기</S.QRCodeLabel>}
        onTrailingIconClick={onNext}
      />
      <DescriptionField
        title={`참여자에게 링크를\n공유하면 요청이 완료돼요!`}
      />
      <S.ImageWrapper>
        <S.LinkImg src={Link} alt="링크" />
        <S.HamImg src={LoginHamImg} alt="정산햄" />
      </S.ImageWrapper>
      <ActionArea
        position="bottom-fixed"
        mainAction={{ label: '링크 공유하기', onClick: share.startShare }}
        alternativeAction={{
          label: '정산 내역 확인하기',
          onClick: () =>
            navigate(generatePath(ROUTE.expenseDetail, { groupToken })),
        }}
      />
      <ShareModal
        open={share.isOpen}
        onClose={share.close}
        onKakaoShare={share.shareKakao}
        onSlackShare={share.shareSlack}
        onCopyLink={share.copyLink}
      />
    </PageLayout>
  );
}

export default ShareStepPage;
