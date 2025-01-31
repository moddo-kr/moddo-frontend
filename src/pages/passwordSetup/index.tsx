import { useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import Header from '@/common/components/header';

function PasswordSetup() {
  // const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');

  return (
    <>
      <Header title="" showIcon={false} type="TitleLeft" />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt="10px"
        mb="32px"
        flexGrow={1}
      >
        <Flex direction="column" gap={8}>
          <Text fontSize={20} whiteSpace="pre-wrap" fontWeight={600}>
            모임 이름을
            <br />
            입력해주세요.
          </Text>
          <Input
            borderRadius={12}
            placeholder="DND 7조 첫모임"
            fontSize={16}
            py={3}
            height={12}
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Flex>
        <Button
          height={12}
          borderRadius={12}
          onClick={() => console.log('groupName:', groupName)}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default PasswordSetup;
