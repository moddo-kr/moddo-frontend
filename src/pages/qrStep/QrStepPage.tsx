import { useRef } from 'react';
import { useLoaderData } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { getToken } from '@/shared/design-system';
import {
  ActionArea,
  DescriptionField,
  Header,
  showToast,
} from '@/shared/design-system/ui';
import generateShareLink from '@/shared/lib/generateShareLink';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './QrStepPage.styles';

interface QrStepProps {
  onBack: () => void;
}

const QR_IMAGE_FILE_NAME = 'moddo-share-qr.png';

function QrStepPage({ onBack }: QrStepProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { groupToken } = useLoaderData();

  const shareLink = generateShareLink(groupToken);

  const handleDownload = () => {
    // 돔 요소를 이미지로 변환
    if (imageRef.current) {
      toPng(imageRef.current)
        .then((dataUrl) => {
          // 이미지 다운로드
          saveAs(dataUrl, QR_IMAGE_FILE_NAME);
        })
        .catch(() => {
          showToast({
            type: 'error',
            content: 'QR코드 다운로드에 실패했어요.',
          });
        });
    }
  };

  return (
    <PageLayout $hasBottomFixedAction>
      <Header
        type="default"
        title="QR코드"
        headingIcon={
          <ArrowLeft width="1.5rem" color={getToken('fg.alternative')} />
        }
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={onBack}
      />
      <DescriptionField
        title={`QR코드를 공유하면\n바로 정산에 참여할 수 있어요!`}
      />
      <S.QrContainer>
        <S.QrField ref={imageRef}>
          {/* QR 코드 자체의 size = 160px */}
          <QRCodeSVG size={160} value={shareLink} />
        </S.QrField>
      </S.QrContainer>
      <ActionArea
        position="bottom-fixed"
        mainAction={{ label: '다운로드', onClick: handleDownload }}
      />
    </PageLayout>
  );
}

export default QrStepPage;
