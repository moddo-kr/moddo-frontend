import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import Header from '@/common/components/Header';
import { ArrowLeft, Reset } from '@/assets/svgs/icon';
import { BillContext } from '../types/billContext.type';

interface QrStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function QrStep({ moveToPreviousStep }: QrStepProps) {
  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={() => {
          moveToPreviousStep?.();
        }}
        rightButtonContent={<Reset width="1.5rem" />}
      />
      <div>QR</div>
    </>
  );
}

export default QrStep;
