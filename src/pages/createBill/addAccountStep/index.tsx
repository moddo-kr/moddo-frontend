import Header from '@/common/components/Header';
import { TitleText } from '@/pages/groupSetup/index.styles';
import { Button, Flex, Input, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import BankNameDrawer from './components/BankNameDrawer';

function AddAccountStep() {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const { open, onOpen, onClose } = useDisclosure();

  const handleBankInputClick = () => {
    onOpen();
  };

  return (
    <>
      <Header
        title="뒤로가기"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => navigate(-1)}
      />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt="10px"
        mb="32px"
        flexGrow={1}
      >
        <Flex direction="column">
          <TitleText>
            정산 받을 계좌를 <br />
            입력해주세요.
          </TitleText>
          <Flex direction="column" mt="23px">
            <Input
              borderRadius={12}
              placeholder="은행 선택"
              fontSize={16}
              py={3}
              height={12}
              mb={4}
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
              mb={4}
              onChange={(e) => setAccountNumber(e.target.value)}
              type="number"
              inputMode="numeric"
            />
          </Flex>
        </Flex>
        <Button
          height={12}
          borderRadius={12}
          onClick={() => navigate('/')}
          disabled={!bankName || !accountNumber}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default AddAccountStep;
