import { Group } from '@/entities/group/model/group.type';
import { ROUTE } from '@/shared/config/route';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import NameChip from '@/shared/ui/NameChip';
import * as S from './GroupLinkButton.styles';

function GroupLinkButton({ group }: { group: Group }) {
  const { groupName, members } = group;
  return (
    <S.LinkButton to={ROUTE.createBill}>
      <Flex direction="column" gap={8}>
        <Text variant="body1Sb">{groupName}</Text>
        <Flex gap={4}>
          {members.map((member) => (
            <NameChip
              key={member.id}
              label={member.name}
              variant={member.role === 'MANAGER' ? 'orange' : 'alternative'}
            />
          ))}
        </Flex>
      </Flex>
    </S.LinkButton>
  );
}

export default GroupLinkButton;
