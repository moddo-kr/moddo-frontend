import Chip from '@/common/components/Chip';
import { ExpenseMember } from '@/pages/create/types/expense.type';
import * as S from './index.styles';

interface ParticipantChipsProps {
  participants: ExpenseMember[];
  onDelete: (participantName: string) => void;
}

function ParticipantChips({ participants, onDelete }: ParticipantChipsProps) {
  return (
    <S.ChipContainer>
      {participants.map((participant: ExpenseMember) => (
        <Chip
          key={participant.id}
          label={participant.name}
          closable
          onClose={() => onDelete(participant.name)}
        />
      ))}
    </S.ChipContainer>
  );
}

export default ParticipantChips;
