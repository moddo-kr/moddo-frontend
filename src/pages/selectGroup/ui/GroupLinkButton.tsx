import { generatePath } from 'react-router';
import { Group } from '@/entities/group/model/group.type';
import { ROUTE } from '@/shared/config/route';
import { NameChip } from '@/shared/design-system/ui';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import * as S from './GroupLinkButton.styles';

function GroupLinkButton({ group }: { group: Group }) {
  const { groupName, members, id } = group;
  const groupToken = String(id);
  return (
    <S.LinkButton to={generatePath(ROUTE.createExpense, { groupToken })}>
      <Flex direction="column" gap={8}>
        <Text variant="body1Sb">{groupName}</Text>
        <Flex gap={4}>
          {members?.map((member) => (
            <NameChip
              key={member.id}
              label={member.name}
              variant={member.role === 'MANAGER' ? 'selected' : 'unselected'}
            />
          ))}
        </Flex>
      </Flex>
    </S.LinkButton>
  );
}

export default GroupLinkButton;
