import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import BottomSheet from '@/common/components/BottomSheet';
import BANK_LIST from '@/common/constants/banks';
import * as S from './index.style';
// import { getBankImagesAndUrl } from '../../utils/BankList';

interface BankNameDrawerProps {
  open: boolean;
  onClose: () => void;
  setBankName: (name: string) => void;
}

function BankNameDrawer({ open, onClose, setBankName }: BankNameDrawerProps) {
  const [name, setName] = useState<string>('');
  // const bankList = getBankImagesAndUrl();

  const handleSubmitButtonClick = () => {
    if (!name) return;
    setBankName(name);
    onClose();
  };

  return (
    <BottomSheet open={open} setOpen={onClose}>
      <Flex
        direction="column"
        gap={7}
        justify="space-between"
        pt={8}
        px={5}
        height="70dvh"
        borderRadius={12}
      >
        <S.DrawerHeader>은행 선택</S.DrawerHeader>
        <S.DrawerBody>
          {BANK_LIST.map((bank) => (
            <S.BankButton
              key={bank.bankName}
              onClick={() => setName(bank.bankName)}
              isSelected={name === bank.bankName}
            >
              <S.BankImg src={bank.url} />
              <S.BankName>{bank.bankName}</S.BankName>
            </S.BankButton>
          ))}
        </S.DrawerBody>
        <S.SubmitButton onClick={handleSubmitButtonClick}>확인</S.SubmitButton>
      </Flex>
    </BottomSheet>
  );
}

export default BankNameDrawer;
