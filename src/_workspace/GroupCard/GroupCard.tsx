import { NameChip } from '@/shared/design-system/ui';
import * as S from './GroupCard.styles';

interface GroupMember {
  name: string;
  isHighlighted?: boolean;
}

interface GroupCardProps {
  groupName: string;
  members: GroupMember[];
}

function GroupCard({ groupName, members }: GroupCardProps) {
  return (
    <S.Container>
      <S.GroupName>{groupName}</S.GroupName>
      <S.ChipList>
        {members.map((member) => (
          <NameChip
            key={member.name}
            label={member.name}
            size="s"
            variant={member.isHighlighted ? 'selected' : 'unselected'}
          />
        ))}
      </S.ChipList>
    </S.Container>
  );
}

export { GroupCard };
export type { GroupCardProps, GroupMember };
