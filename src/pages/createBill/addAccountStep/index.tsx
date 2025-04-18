import { useLoaderData } from 'react-router';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import usePutUpdateAccount from '@/common/queries/group/usePutUpdateAccount';
import { ArrowDown, ArrowLeft } from '@/assets/svgs/icon';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Button from '@/common/components/Button';
import DescriptionField from '@/common/components/DescriptionField';
import Input from '@/common/components/Input';
import { BoundaryError } from '@/common/types/error.type';
import BankNameDrawer from './components/BankNameDrawer';
import * as S from './index.styles';

interface AddAccountStepProps {
  onNext: () => void;
  onBack: () => void;
}

function AddAccountStep({ onNext, onBack }: AddAccountStepProps) {
  const { groupToken } = useLoaderData();
  const [bankName, setBankName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const { open, onOpen, onClose } = useDisclosure();
  const { mutate: updateAccountMutate } = usePutUpdateAccount(
    groupToken,
    {
      // CHECK - 문서에는 403 에러로 되어 있지만, 실제로는 500 에러가 발생함
      // 유저가 모임 총무가 아닐 경우에 발생하는 에러
      403: () => {
        throw new BoundaryError({
          title: '접근 권한이 없어요.',
          description: '계좌는 총무만 등록할 수 있어요.',
        });
      },
    },
    [403]
  );

  const handleBankInputClick = () => {
    onOpen();
  };

  const handleNextButtonClick = () => {
    updateAccountMutate(
      {
        accountData: {
          bank: bankName,
          accountNumber,
        },
        groupToken,
      },
      {
        onSuccess: onNext,
      }
    );
  };

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width={24} />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={onBack}
      />
      <DescriptionField title={`정산 받을 계좌를\n입력해주세요.`} />
      <S.PageContentWrapper>
        <Input
          placeholder="은행 선택"
          value={bankName}
          onClick={handleBankInputClick}
          icon={<ArrowDown width={24} />}
          readOnly
        />
        <BankNameDrawer
          open={open}
          onClose={onClose}
          setBankName={setBankName}
        />
        <Input
          placeholder="계좌번호를 입력해주세요."
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          type="number"
          inputMode="numeric"
        />
      </S.PageContentWrapper>
      <BottomButtonContainer>
        <Button
          onClick={handleNextButtonClick}
          disabled={!bankName || !accountNumber}
        >
          다음
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default AddAccountStep;
