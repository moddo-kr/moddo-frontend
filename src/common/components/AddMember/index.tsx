import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { useMemo, useState } from 'react';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import MemberProfile from '../MemberProfile';
import { getRandomColor } from '@/common/utils/getRandomColor';

function AddMember() {
  const [name, setName] = useState('');
  const { members, setMembers } = useGroupSetupStore();
  const handleAddButtonClick = () => {
    if (!name.trim()) return; // 이름이 없으면 추가하지 않음
    const newMember = {
      name: name,
    };
    setMembers([...members, newMember]);
    setName('');
  };

  const handleDeleteButtonClick = (index: number) => {
    const newMembers = [
      ...members.slice(0, index),
      ...members.slice(index + 1),
    ];
    setMembers(newMembers);
  };

  return (
    <Flex direction="column" height="fit-content">
      <Flex gap={2} alignItems="center">
        <Input
          borderRadius={12}
          placeholder="참가자를 입력해주세요"
          fontSize={16}
          py={3}
          height={12}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          fontSize={16}
          borderRadius={12}
          backgroundColor="#e6e6e6"
          color="black"
          fontWeight={400}
          onClick={() => handleAddButtonClick()}
          px={5}
          textAlign="center"
          lineHeight={1.5}
          py={2}
          height={12}
        >
          추가하기
        </Button>
      </Flex>
      <Flex direction="column" gap={2} mt={7}>
        <Text
          display="flex"
          alignItems="center"
          whiteSpace="pre-wrap"
          fontWeight={600}
        >
          총 <Text>{members.length}</Text>명
        </Text>
        <Flex gap={3} flexWrap="wrap">
        {members.map((member, index) => (
          <MemberProfile
            key={index}
            member={member}
            index={index}
            handleDeleteButtonClick={() => handleDeleteButtonClick(index)}
          />
        ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddMember;
