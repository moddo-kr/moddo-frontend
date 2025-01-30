import { useFormContext } from 'react-hook-form';
import * as S from '../styles/BillFormCard.styles';

interface BillFormCardProps {
  index: number;
}

function BillFormCard({ index }: BillFormCardProps) {
  const { register } = useFormContext();

  return (
    <S.BillFormCard>
      <S.BillFormCardTitle>1차</S.BillFormCardTitle>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          결제 금액
          <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput
          {...register(`bills.${index}.amount`, { valueAsNumber: true })}
        />
        {/* TODO: Controller */}
      </S.BillFormField>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          지출 장소 및 내용
          <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput
          {...register(`bills.${index}.place`)}
          placeholder="ex. 투썸플레이스"
        />
      </S.BillFormField>
      <S.BillFormField>
        <S.BillFormFieldLabel>지출일</S.BillFormFieldLabel>
        <S.BillFormFieldInput {...register(`bills.${index}.date`)} />
        {/* TODO: Controller */}
      </S.BillFormField>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          참여자<S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput {...register(`bills.${index}.participants`)} />
        {/* TODO: Controller */}
      </S.BillFormField>
    </S.BillFormCard>
  );
}

export default BillFormCard;
