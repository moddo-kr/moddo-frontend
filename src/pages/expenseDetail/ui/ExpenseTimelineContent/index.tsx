import { useState } from 'react';
import { TextButton } from '@/shared/design-system/ui';
import Chip from '@/shared/ui/Chip';
import Text from '@/shared/ui/Text';
import { ExpenseDetail } from '@/entities/expense/model/expense.type';
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
          <TextButton onClick={() => setIsExpanded(!isExpanded)}>
            <Text>{expense.groupMembers.length}명</Text>
          </TextButton>
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
