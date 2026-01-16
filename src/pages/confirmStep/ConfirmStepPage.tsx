import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import DescriptionField from '@/shared/ui/DescriptionField';
import Text from '@/shared/ui/Text';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Button from '@/shared/ui/Button';
import { EditBillContext } from '@/features/expense-management/lib/createBillFunnel.type';
import AsyncBoundary from '@/shared/ui/AsyncBoundary';
import ExpenseContent from './ui/ExpenseContent';

interface ConfirmStepProps {
  onNext: () => void;
  onBack: () => void;
  onEdit: ({ expenseId, initialExpense }: EditBillContext) => void;
  onAdd: () => void;
}

function ConfirmStepPage({ onNext, onBack, onEdit, onAdd }: ConfirmStepProps) {
  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={onBack}
        rightButtonContent={<Text variant="body1Sb">지출 추가</Text>}
        rightButtonOnClick={onAdd}
        bgColor="semantic.background.normal.alternative"
      />
      <DescriptionField
        bgColor="semantic.background.normal.alternative"
        title={`지출 내역을\n확인해주세요.`}
      />
      <AsyncBoundary>
        <ExpenseContent onEdit={onEdit} />
      </AsyncBoundary>
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button onClick={onNext}>확인했어요</Button>
      </BottomButtonContainer>
    </>
  );
}

export default ConfirmStepPage;
