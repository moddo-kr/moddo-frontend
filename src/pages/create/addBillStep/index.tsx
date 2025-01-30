import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { VStack } from '@chakra-ui/react';
import BillFormCard from './components/BillFormCard';
import * as S from './styles/index.styles';

const BillsFormSchema = z.object({
  bills: z.array(
    z.object({
      amount: z.number().int().positive(), // 결제 금액
      place: z.string(), // 지출 장소 및 내용
      date: z.string().optional(), // 지출일
      participants: z.array(z.string()).optional(), // 참여자 (임시로 optional)
    })
  ),
});

const defaultValues = {
  amount: 0,
  place: '',
  date: Date.now().toString(),
  participants: [''],
};

function AddBillStep() {
  const formMethods = useForm({
    resolver: zodResolver(BillsFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: {
      bills: [defaultValues],
    },
  });
  const { fields } = useFieldArray({
    control: formMethods.control,
    name: 'bills',
  });

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

  // 임시...
  const onFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <VStack align="flex-start">
        {/* TODO : VStack: 정산 시작 step 공통 레이아웃 적용 전 임시 레이아웃 */}
        <S.Header>
          <S.HeaderButton>지출 추가</S.HeaderButton>
        </S.Header>
        <S.TopWrapper>
          <S.MoimName>모임 이름</S.MoimName>
          <S.TopMessage>{`의\n지출 내역을 입력해주세요.`}</S.TopMessage>
        </S.TopWrapper>
        <S.BillFormList>
          {fields.map((field, index) => (
            <BillFormCard key={field.id} index={index} />
          ))}
        </S.BillFormList>
      </VStack>
      <S.BottomButton
        type="button"
        onClick={handleSubmit(onFormSubmit)}
        disabled={!allFormsValid}
      >
        다음
      </S.BottomButton>
    </FormProvider>
  );
}

export default AddBillStep;
