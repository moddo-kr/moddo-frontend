import * as S from './PaidChip.styles';

type PaidChipStatus = '입금완료' | '미입금' | '확인중';

interface PaidChipProps {
  status: PaidChipStatus;
}

function PaidChip(props: PaidChipProps) {
  const { status } = props;

  return <S.Chip $status={status}>{status}</S.Chip>;
}

export { PaidChip };
export type { PaidChipProps, PaidChipStatus };
