import { generatePath } from 'react-router';
import { Group } from '@/entities/group/model/group.type';
import { ROUTE } from '@/shared/config/route';
import { NameChip } from '@/shared/design-system/ui';
import * as S from './GroupLinkButton.styles';

function GroupLinkButton({ group }: { group: Group }) {
  const { groupName, members, id } = group;
  const groupToken = String(id);
  return (
    <S.LinkButton to={generatePath(ROUTE.createExpense, { groupToken })}>
      <S.GroupLinkContent>
        <S.GroupName>{groupName}</S.GroupName>
        <S.MemberChipRow>
          {members?.map((member) => (
            <NameChip
              key={member.id}
              label={member.name}
              variant={member.role === 'MANAGER' ? 'selected' : 'unselected'}
            />
          ))}
        </S.MemberChipRow>
      </S.GroupLinkContent>
    </S.LinkButton>
  );
}

export default GroupLinkButton;
