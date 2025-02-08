import { useState } from 'react';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import Header from '@/common/components/Header';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/common/components/Drawer/drawer';
import { ArrowDown, ArrowLeft } from '@/assets/svgs/icon';
import { BillContext } from '../types/billContext.type';
import * as S from './index.style';

const AccountFormSchema = z.object({
  bank: z.string().min(1),
  accountNumber: z.string().min(1),
});

const bankList = [
  'NH농협',
  '카카오뱅크',
  ' KB국민',
  '토스뱅크',
  '신한',
  '우리',
  'IBK기업',
  '하나',
  '새마을',
  '부산',
  'im뱅크(대구)',
  '케이뱅크',
  '신협',
  '우체국',
  'SC제일',
  '경남',
  '광주',
  '수협',
  '전북',
];

const defaultValues = {
  bank: '',
  accountNumber: '',
};

interface AddAccountStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

let SelectedBank = '';

function AddAccountStep({
  moveToNextStep,
  moveToPreviousStep,
}: AddAccountStepProps) {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const formMethods = useForm({
    resolver: zodResolver(AccountFormSchema),
    mode: 'onChange',
    defaultValues,
  });

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

  const onFormSubmit = (data: any) => {
    console.log(data);
    moveToNextStep?.();
  };

  return (
    <FormProvider {...formMethods}>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <Flex alignItems="center">
            <ArrowLeft width="1.5rem" />
            <Text fontSize="1rem" color="#444950">
              뒤로가기
            </Text>
          </Flex>
        }
        leftButtonOnClick={() => {
          moveToPreviousStep?.();
        }}
      />
      <S.TopWrapper>
        <S.TopMessage>{`정산 받을 계좌를\n입력해주세요`}</S.TopMessage>
      </S.TopWrapper>
      <Stack
        direction="column"
        paddingY="3.44rem"
        paddingX="1.25rem"
        gap="3rem"
        flex={1}
      >
        <DrawerRoot
          placement="bottom"
          open={bottomSheetOpen}
          onOpenChange={(e) => setBottomSheetOpen(e.open)}
        >
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <S.InputContainer>
              <S.BankInput
                type="text"
                placeholder="은행명"
                {...formMethods.register('bank')}
                readOnly
              />
              <ArrowDown width="1.5rem" />
            </S.InputContainer>
          </DrawerTrigger>
          <DrawerContent>
            <S.BankBottomSheetContainer>
              <S.BottomSheetTitle>은행 선택</S.BottomSheetTitle>
              <S.BankList>
                {bankList.map((bank) => (
                  <S.BankItem
                    key={bank}
                    type="button"
                    onClick={() => {
                      SelectedBank = bank;
                    }}
                  >
                    <S.NullIcon />
                    <S.BankName>{bank}</S.BankName>
                  </S.BankItem>
                ))}
              </S.BankList>
            </S.BankBottomSheetContainer>
            <S.ButtonWrapper>
              <S.BottomButton
                type="button"
                onClick={() => {
                  formMethods.setValue('bank', SelectedBank);
                  setBottomSheetOpen(false);
                }}
              >
                확인
              </S.BottomButton>
            </S.ButtonWrapper>
          </DrawerContent>
        </DrawerRoot>
        <S.AccoutInput
          type="text"
          placeholder="계좌번호를 입력해주세요."
          {...formMethods.register('accountNumber')}
        />
      </Stack>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={handleSubmit(onFormSubmit)}
          disabled={!allFormsValid}
        >
          확인
        </S.BottomButton>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default AddAccountStep;
