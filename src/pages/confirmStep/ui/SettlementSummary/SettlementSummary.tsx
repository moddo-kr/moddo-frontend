import {
  Accordion,
  useAccordionContext,
  NameChip,
} from '@/shared/design-system/ui';
import SvgCarbonEdit from '@/shared/assets/svgs/icon/CarbonEdit';
import SvgClose from '@/shared/assets/svgs/icon/Close';
import SvgNext from '@/shared/assets/svgs/icon/Next';
import type { Expense } from '@/entities/expense/model/expense.type';
import type { EditExpenseContext } from '@/features/expense-management/lib/createExpenseFunnel.type';
import * as S from './SettlementSummary.styles';

interface SettlementSummaryProps extends Expense {
  index: number;
  onEdit: (context: EditExpenseContext) => void;
  onDelete?: () => void;
}

function SelectFieldTrigger({ memberCount }: { memberCount: number }) {
  const { isOpen, toggle, accordionId } = useAccordionContext();

  return (
    <S.SelectField
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={accordionId}
    >
      <S.CountText>
        총 <S.CountHighlight>{memberCount}</S.CountHighlight>명
      </S.CountText>
      <S.ChevronWrapper $isOpen={isOpen}>
        <SvgNext width={24} height={24} />
      </S.ChevronWrapper>
    </S.SelectField>
  );
}

function SettlementSummary({
  id,
  index,
  amount,
  content,
  date,
  memberExpenses,
  onEdit,
  onDelete,
}: SettlementSummaryProps) {
  return (
    <S.Container>
      <S.TitleRow>
        <S.TitleText>{index + 1}차</S.TitleText>
        <S.ButtonGroup>
          <S.EditButton
            type="button"
            onClick={() =>
              onEdit({
                expenseId: id,
                initialExpense: { amount, content, date, memberExpenses },
              })
            }
            aria-label="지출 수정"
          >
            <SvgCarbonEdit width={20} height={20} />
          </S.EditButton>
          {onDelete && (
            <S.EditButton
              type="button"
              onClick={onDelete}
              aria-label="지출 삭제"
            >
              <SvgClose width={20} height={20} />
            </S.EditButton>
          )}
        </S.ButtonGroup>
      </S.TitleRow>
      <S.TextGroup>
        <S.PlaceName>{content}</S.PlaceName>
        <S.Amount>{amount.toLocaleString('ko-KR')} 원</S.Amount>
      </S.TextGroup>
      <Accordion>
        <SelectFieldTrigger memberCount={memberExpenses.length} />
        <Accordion.Content>
          <S.MemberChipList>
            {memberExpenses.map((member) => (
              <NameChip
                key={member.id}
                label={
                  member.role === 'MANAGER'
                    ? `${member.name}(총무)`
                    : member.name
                }
                size="s"
                variant={member.role === 'MANAGER' ? 'selected' : 'unselected'}
              />
            ))}
          </S.MemberChipList>
        </Accordion.Content>
      </Accordion>
    </S.Container>
  );
}

export { SettlementSummary };
export type { SettlementSummaryProps };
