import { useLoaderData } from 'react-router';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import useGetAllExpense from '@/common/queries/expense/useGetAllExpense';
import DescriptionField from '@/common/components/DescriptionField';
import Text from '@/common/components/Text';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Button from '@/common/components/Button';
import ExpenseCardList from './components/ExpenseCardList';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext, BillContextRequired } from '../types/billContext.type';
import * as S from './index.styles';

interface ConfirmStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ConfirmStep({
  moveToNextStep,
  moveToPreviousStep,
  moveToStep,
}: ConfirmStepProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading } = useGetAllExpense(groupToken);

  const moveToEditStep = ({ id, initialExpense }: BillContextRequired) => {
    moveToStep?.('EDIT_EXPENSE', { id, initialExpense });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.expenses) {
    return <div>지출 내역이 없습니다.</div>;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={moveToPreviousStep}
        rightButtonContent={<Text variant="body1Sb">지출 추가</Text>}
        rightButtonOnClick={() => moveToStep?.('ADD_EXPENSE')}
        bgColor="#F1F3F5"
      />
      <DescriptionField
        bgColor="semantic.background.normal.alternative"
        title={`지출 내역을\n확인해주세요.`}
      />
      <S.TotalExpenseWrapper>
        <Text variant="body1Sb">누적 금액</Text>
        <Text variant="heading2" color="semantic.text.strong">
          {getTotalExpense(data.expenses).toLocaleString()}원
        </Text>
      </S.TotalExpenseWrapper>
      <ExpenseCardList
        expenses={data.expenses}
        moveToEditStep={moveToEditStep}
      />
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button
          onClick={() => {
            moveToNextStep?.();
          }}
        >
          확인했어요
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default ConfirmStep;
