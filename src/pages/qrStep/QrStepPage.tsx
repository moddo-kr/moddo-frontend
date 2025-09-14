import { useRef } from 'react';
import { useLoaderData } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';
import saveAs from 'file-saver';
import { ArrowLeft, Reset } from '@/assets/svgs/icon';
import { showToast } from '@/common/components/Toast';
import generateShareLink from '@/common/utils/generateShareLink';
import Header from '@/common/components/Header';
import Button from '@/common/components/Button';
import DescriptionField from '@/common/components/DescriptionField';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
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
    <>
      <Header
        type="TitleCenter"
        title="QR코드"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={onBack}
        rightButtonContent={<Reset width="1.5rem" />}
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
      <BottomButtonContainer>
        <Button onClick={handleDownload}>다운로드</Button>
      </BottomButtonContainer>
    </>
  );
}

export default QrStepPage;
