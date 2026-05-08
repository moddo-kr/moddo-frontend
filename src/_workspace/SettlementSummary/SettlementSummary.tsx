import {
  Accordion,
  useAccordionContext,
  NameChip,
} from '@/shared/design-system/ui';
import SvgCarbonEdit from '@/shared/assets/svgs/icon/CarbonEdit';
import SvgNext from '@/shared/assets/svgs/icon/Next';
import * as S from './SettlementSummary.styles';

interface SettlementSummaryMember {
  id: number;
  name: string;
  isHighlighted?: boolean;
}

interface SettlementSummaryProps {
  title: string;
  placeName: string;
  amount: number;
  members: SettlementSummaryMember[];
  onEdit?: () => void;
}

function SelectFieldTrigger({ memberCount }: { memberCount: number }) {
  const { isOpen, toggle } = useAccordionContext();
  return (
    <S.SelectField type="button" onClick={toggle}>
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
  title,
  placeName,
  amount,
  members,
  onEdit,
}: SettlementSummaryProps) {
  return (
    <S.Container>
      <S.TitleRow>
        <S.TitleText>{title}</S.TitleText>
        {onEdit && (
          <S.EditButton
            type="button"
            onClick={onEdit}
            aria-label="정산 요약 편집"
          >
            <SvgCarbonEdit width={20} height={20} />
          </S.EditButton>
        )}
      </S.TitleRow>
      <S.TextGroup>
        <S.PlaceName>{placeName}</S.PlaceName>
        <S.Amount>{amount.toLocaleString('ko-KR')} 원</S.Amount>
      </S.TextGroup>
      <Accordion>
        <SelectFieldTrigger memberCount={members.length} />
        <Accordion.Content>
          <S.MemberChipList>
            {members.map((member) => (
              <NameChip
                key={member.id}
                label={member.name}
                size="s"
                variant={member.isHighlighted ? 'selected' : 'unselected'}
              />
            ))}
          </S.MemberChipList>
        </Accordion.Content>
      </Accordion>
    </S.Container>
  );
}

export { SettlementSummary };
export type { SettlementSummaryProps, SettlementSummaryMember };
