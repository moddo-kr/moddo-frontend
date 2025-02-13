import { format } from 'date-fns';
import { CarbonEdit, Close, Next } from '@/assets/svgs/icon';
import Chip from '@/common/components/Chip';
import { Expense } from '@/pages/createBill/types/expense.type';
import distributeAmount from '@/pages/createBill/utils/distributeExpense';
import * as S from './index.styles';

interface ExpenseCardProps extends Expense {
  index: number;
  readonly?: boolean;
}

function ExpenseCard({
  index,
  amount,
  content,
  date,
  memberExpenses,
  readonly,
}: ExpenseCardProps) {
  return (
    <S.ExpenseCardWrapper>
      <S.Date>{format(new Date(date), 'yyyy년 M월 d일')}</S.Date>
      <S.Card>
        <S.TopWrapper>
          <S.Index>{index + 1}차</S.Index>
          <S.IconButtonsWrapper>
            <S.IconButton
              type="button"
              disabled={readonly}
              onClick={() => {
                console.log(`${index + 1}차 수정`);
              }}
            >
              <CarbonEdit />
            </S.IconButton>
            <S.IconButton
              type="button"
              disabled={readonly}
              onClick={() => {
                console.log(`${index + 1}차 삭제`);
              }}
            >
              <Close />
            </S.IconButton>
          </S.IconButtonsWrapper>
        </S.TopWrapper>
        <S.Content>{content}</S.Content>
        <S.BottomWrapper>
          <S.Distribute>
            <S.DistributeText>
              {/* 가장 첫번째 참여자의 금액을 보여주도록 함 */}
              {/* MVP에서는 모든 참여자의 금액이 똑같이 나눠떨어지는 경우만 고려함 */}
              {distributeAmount(
                amount,
                memberExpenses.length
              )[0].toLocaleString()}
            </S.DistributeText>
            <S.DistributeText>원 씩</S.DistributeText>
          </S.Distribute>
          <S.MemberCollapse collapsible variant="plain">
            <S.CollapseItem value="members">
              <S.CollapseTrigger>
                <S.TriggerText>
                  총 <S.MemberCount>{memberExpenses.length}</S.MemberCount>명
                </S.TriggerText>
                <Next width="1.5rem" />
              </S.CollapseTrigger>
              <S.CollapseContent>
                {memberExpenses.map((member) => (
                  <Chip
                    key={`${index}-${member.memberId}`}
                    label={member.name}
                    variant="white"
                  />
                ))}
              </S.CollapseContent>
            </S.CollapseItem>
          </S.MemberCollapse>
        </S.BottomWrapper>
      </S.Card>
    </S.ExpenseCardWrapper>
  );
}

export default ExpenseCard;
