import { useState } from 'react';
import { Next } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Chip from '@/common/components/Chip';
import Text from '@/common/components/Text';
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
        <Button variant="text" onClick={() => setIsExpanded(!isExpanded)}>
          <Text>{expense.groupMembers.length}명</Text>
          <Next
            width={24}
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </Button>
        {isExpanded && (
          <S.MemberChipList>
            {expense.groupMembers.map((name) => (
              <Chip key={name} label={name} variant="disabled" size="sm" />
            ))}
          </S.MemberChipList>
        )}
      </S.MemberChipContainer>
    </S.ExpenseContent>
  );
}

export default ExpenseTimelineContent;
