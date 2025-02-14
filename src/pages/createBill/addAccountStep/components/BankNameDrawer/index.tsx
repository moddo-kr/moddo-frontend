import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/common/components/Drawer/drawer';
import { Flex } from '@chakra-ui/react';
import * as S from './index.style';
import { BankList } from '../../constants/BankList';

interface BankNameDrawerProps {
  open: boolean;
  onClose: () => void;
  setBankName: (name: string) => void;
}

function BankNameDrawer({ open, onClose, setBankName }: BankNameDrawerProps) {
  const [name, setName] = useState<string>('');

  const handleSubmitButtonClick = () => {
    if (!name) return;
    setBankName(name);
    onClose();
  };

  return (
    <DrawerRoot
      open={open}
      placement="bottom" // 드로어가 바닥에서 올라오도록 설정
    >
      <DrawerBackdrop />
      <DrawerContent style={{ borderRadius: '12px 12px 0 0' }}>
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
            {BankList.map((bank) => (
              <S.BankButton
                key={bank}
                onClick={() => setName(bank)}
                isSelected={name === bank}
              >
                <S.BankName>{bank}</S.BankName>
              </S.BankButton>
            ))}
          </S.DrawerBody>
          <DrawerTrigger asChild>
            <S.SubmitButton onClick={handleSubmitButtonClick}>
              확인
            </S.SubmitButton>
          </DrawerTrigger>
        </Flex>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default BankNameDrawer;
