import { useLoaderData } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import DescriptionField from '@/shared/ui/DescriptionField';
import Text from '@/shared/ui/Text';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Button from '@/shared/ui/Button';
import getTotalExpense from '@/shared/lib/getTotalExpense';
import { EditBillContext } from '@/shared/types/createBillFunnel.type';
import useGetAllExpense from './api/useGetAllExpense';
import ExpenseCardList from './ui/ExpenseCardList';
import * as S from './ConfirmStepPage.styles';

interface ConfirmStepProps {
  onNext: () => void;
  onBack: () => void;
  onEdit: ({ expenseId, initialExpense }: EditBillContext) => void;
  onAdd: () => void;
}

function ConfirmStepPage({ onNext, onBack, onEdit, onAdd }: ConfirmStepProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading } = useGetAllExpense(groupToken);

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
        leftButtonOnClick={onBack}
        rightButtonContent={<Text variant="body1Sb">지출 추가</Text>}
        rightButtonOnClick={onAdd}
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
      <ExpenseCardList expenses={data.expenses} onEdit={onEdit} />
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button onClick={onNext}>확인했어요</Button>
      </BottomButtonContainer>
    </>
  );
}

export default ConfirmStepPage;
