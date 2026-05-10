import { NameChip } from '@/shared/design-system/ui';
import Text from '@/shared/ui/Text';
import { ExpenseDetail } from '@/entities/expense/model/expense.type';
import * as S from './index.styles';

interface ExpenseTimelineContentProps {
  expense: ExpenseDetail;
}

function ExpenseTimelineContent({ expense }: ExpenseTimelineContentProps) {
  return (
    <S.ExpenseContent>
      <S.ContentTitle>
        <Text variant="body1Sb" color="semantic.text.subtle">
          {expense.content}
        </Text>
        <Text variant="heading2" color="semantic.text.strong">
          {expense.totalAmount.toLocaleString()}원
        </Text>
      </S.ContentTitle>
      <S.MemberChipContainer>
        <S.MemberChipHeader type="button">
          <Text>{expense.groupMembers.length}명</Text>
        </S.MemberChipHeader>
        <S.MemberChipList>
          {expense.groupMembers.map((name) => (
            <NameChip key={name} label={name} variant="black" size="s" />
          ))}
        </S.MemberChipList>
      </S.MemberChipContainer>
    </S.ExpenseContent>
  );
}

export default ExpenseTimelineContent;
