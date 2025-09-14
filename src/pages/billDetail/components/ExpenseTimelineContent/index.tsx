import { useState } from 'react';
import Button from '@/shared/components/Button';
import Chip from '@/shared/components/Chip';
import Text from '@/shared/components/Text';
import { ExpenseDetail } from '@/pages/createBill/types/expense.type';
import * as S from './index.styles';

interface ExpenseTimelineContentProps {
  expense: ExpenseDetail;
}

function ExpenseTimelineContent({ expense }: ExpenseTimelineContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <S.MemberChipHeader>
          <Button variant="text" onClick={() => setIsExpanded(!isExpanded)}>
            <Text>{expense.groupMembers.length}명</Text>
          </Button>
        </S.MemberChipHeader>
        <S.MemberChipList>
          {expense.groupMembers.map((name) => (
            <Chip key={name} label={name} variant="disabled" size="sm" />
          ))}
        </S.MemberChipList>
      </S.MemberChipContainer>
    </S.ExpenseContent>
  );
}

export default ExpenseTimelineContent;
