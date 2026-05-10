import { useState } from 'react';
import { BottomSheet } from '@/shared/design-system/ui';
import BANK_LIST from './config/banks';
import * as S from './index.style';

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
    <BottomSheet open={open} onClose={onClose} title="은행 선택">
      <S.DrawerContainer>
        <S.DrawerBody>
          <S.GridContainer>
            {BANK_LIST.map((bank) => (
              <S.BankButton
                key={bank.bankName}
                onClick={() => setName(bank.bankName)}
                $isSelected={name === bank.bankName}
              >
                <S.BankImg src={bank.url} />
                <S.BankName>{bank.bankName}</S.BankName>
              </S.BankButton>
            ))}
          </S.GridContainer>
          <S.FadeOverlay />
        </S.DrawerBody>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={handleSubmitButtonClick}>
            확인
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.DrawerContainer>
    </BottomSheet>
  );
}

export default BankNameDrawer;
