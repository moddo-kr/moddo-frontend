import { Chip } from '@/shared/design-system/ui';
import { ExpenseDetail } from '@/entities/expense/model/expense.type';
import * as S from './index.styles';

interface ExpenseTimelineContentProps {
  expense: ExpenseDetail;
}

function ExpenseTimelineContent({ expense }: ExpenseTimelineContentProps) {
  return (
    <S.ExpenseContent>
      <S.ContentTitle>
        <S.ExpenseContentName>{expense.content}</S.ExpenseContentName>
        <S.ExpenseTotalAmount>
          {expense.totalAmount.toLocaleString()}원
        </S.ExpenseTotalAmount>
      </S.ContentTitle>
      <S.MemberChipContainer>
        <S.MemberChipHeader type="button">
          <S.MemberCount>{expense.groupMembers.length}명</S.MemberCount>
        </S.MemberChipHeader>
        <S.MemberChipList>
          {expense.groupMembers.map((name) => (
            <Chip key={name} label={name} variant="black" size="s" />
          ))}
        </S.MemberChipList>
      </S.MemberChipContainer>
    </S.ExpenseContent>
  );
}

export default ExpenseTimelineContent;
