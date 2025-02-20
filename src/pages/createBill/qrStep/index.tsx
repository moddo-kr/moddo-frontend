import { useLoaderData } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Reset } from '@/assets/svgs/icon';
import generateShareLink from '@/common/utils/generateShareLink';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import Header from '@/common/components/Header';
import Button from '@/common/components/Button';
import DescriptionField from '@/common/components/DescriptionField';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';

interface QrStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function QrStep({ moveToPreviousStep }: QrStepProps) {
  const { groupToken } = useLoaderData();

  const shareLink = generateShareLink(groupToken);

  return (
    <>
      <Header
        type="TitleCenter"
        title="QR코드"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={() => {
          moveToPreviousStep?.();
        }}
        rightButtonContent={<Reset width="1.5rem" />}
      />
      <DescriptionField
        title={`QR코드를 공유하면\n바로 정산에 참여할 수 있어요!`}
      />
      <S.QrContainer>
        <S.QrField>
          {/* QR 코드 자체의 size = 160px */}
          <QRCodeSVG size={160} value={shareLink} />
        </S.QrField>
      </S.QrContainer>
      <BottomButtonContainer>
        <Button>다운로드</Button>
      </BottomButtonContainer>
    </>
  );
}

export default QrStep;
