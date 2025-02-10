import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import { Member } from '@/common/types/member.type';
import MemberProfile from '../MemberProfile';

interface AddMemberProps {
  members: Member[];
  setMembers: (members: Member[]) => void;
}

function AddMember({ members, setMembers }: AddMemberProps) {
  /** @Todo 모임원 추가 로직 수정에 따라 삭제할 코드 */
  const [name, setName] = useState('');
  useEffect(() => {
    if (members.length === 0) {
      setMembers([{ id: nanoid(), name: '김모또(총무)', role: 'treasurer' }]);
    }
  }, [members.length, setMembers]); // 의존성 배열에 추가// 빈 배열로 설정하면, setMembers 함수는 한 번만 생성됨

  const addNewMember = () => {
    if (!name.trim()) return; // 이름이 없으면 추가하지 않음
    const newMember: Member = {
      id: nanoid(), // nanoid를 사용하여 고유한 id 생성
      name,
      role: 'participant',
    };
    setMembers([newMember, ...members]);
    setName('');
  };

  /** 새로운 멤버를 추가하는 폼 이벤트 핸들러 */
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // form submit 방지
    addNewMember();
  };

  /** 멤버를 삭제하는 이벤트 핸들러 */
  const handleDeleteButtonClick = (id: string) => {
    const newMembers = members.filter((member) => member.id !== id);
    setMembers(newMembers);
  };

  return (
    <Flex direction="column" height="fit-content">
      <form onSubmit={handleFormSubmit}>
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
            type="submit"
            fontSize={16}
            borderRadius={12}
            backgroundColor="#e6e6e6"
            color="black"
            fontWeight={400}
            px={5}
            textAlign="center"
            lineHeight={1.5}
            py={2}
            height={12}
            disabled={!name.trim()}
          >
            추가하기
          </Button>
        </Flex>
      </form>
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
          {members.map((member) => (
            <MemberProfile
              key={member.id}
              member={member}
              handleDeleteButtonClick={() => handleDeleteButtonClick(member.id)}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddMember;
