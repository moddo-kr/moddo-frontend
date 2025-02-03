import Chip from '@/common/components/Chip';
import * as S from './index.styles';

interface ParticipantChipsProps {
  participants: string[];
  onDelete: (participantName: string) => void;
}

function ParticipantChips({ participants, onDelete }: ParticipantChipsProps) {
  return (
    <S.ChipContainer>
      {participants.map((participantName: string) => (
        <Chip
          key={participantName}
          label={participantName}
          closable
          onClose={() => onDelete(participantName)}
        />
      ))}
    </S.ChipContainer>
  );
}

export default ParticipantChips;
