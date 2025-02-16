import { useState } from 'react';
import { Button, Flex, Input, useDisclosure } from '@chakra-ui/react';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { TitleText } from '@/pages/groupSetup/index.styles';
import BankNameDrawer from './components/BankNameDrawer';
import { BillContext } from '../types/billContext.type';
import usePutUpdateAccount from '@/common/queries/group/usePutUpdateAccount';

interface AddAccountStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function AddAccountStep({
  moveToPreviousStep,
  moveToNextStep,
}: AddAccountStepProps) {
  const [bankName, setBankName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const { open, onOpen, onClose } = useDisclosure();
  const { mutate: updateAccountMutate } = usePutUpdateAccount();

  const handleBankInputClick = () => {
    onOpen();
  };

  const handleNextButtonClick = () => {
    updateAccountMutate(
      { bank: bankName, accountNumber: accountNumber },
      {
        onSuccess: () => {
          moveToNextStep?.();
        },
      }
    );
  };

  return (
    <>
      <Header
        title="뒤로가기"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={moveToPreviousStep}
      />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt={2.5}
        mb={8}
        flexGrow={1}
      >
        <Flex direction="column">
          <TitleText>
            정산 받을 계좌를 <br />
            입력해주세요.
          </TitleText>
          <Flex direction="column" mt={6} gap={12}>
            <Input
              borderRadius={12}
              placeholder="은행 선택"
              fontSize={16}
              py={3}
              height={12}
              value={bankName}
              onClick={handleBankInputClick}
              readOnly
            />
            <BankNameDrawer
              open={open}
              onClose={onClose}
              setBankName={setBankName}
            />
            <Input
              borderRadius={12}
              placeholder="계좌번호를 입력해주세요."
              fontSize={16}
              py={3}
              height={12}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              type="number"
              inputMode="numeric"
            />
          </Flex>
        </Flex>
        <Button
          px={3.5}
          py={4}
          height="fit-content"
          lineHeight={1.5}
          borderRadius={32}
          onClick={handleNextButtonClick}
          disabled={!bankName || !accountNumber}
          fontSize={16}
          fontWeight={600}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default AddAccountStep;
