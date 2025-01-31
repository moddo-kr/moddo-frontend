import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header from '@/common/components/header';
import * as S from './index.styles';
import { SelectNewGroupIcon, SelectRecentGroupIcon } from '@/assets/svgs';
import { ROUTE } from '@/common/constants/route';

function SelectGroup() {
  const [selectedButton, setSelectedButton] = useState(0);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setSelectedButton((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        title="모임 선택"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => console.log('뒤로가기 클릭')}
      />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt="10px"
        mb="32px"
        flexGrow={1}
      >
        <main>
          <Flex gap="2" direction="column" justify="flex-start" pb="120px">
            <S.SmallContent>정산을 시작하려는</S.SmallContent>
            <S.MainContent>모임을 선택해 주세요</S.MainContent>
          </Flex>
          <Flex gap="6" direction="row">
            <S.SelectButton
              selected={selectedButton === 0}
              onClick={handleButtonClick}
            >
              <SelectNewGroupIcon width={44} />
              새로 생성
            </S.SelectButton>
            <S.SelectButton
              selected={selectedButton === 1}
              onClick={handleButtonClick}
            >
              <SelectRecentGroupIcon width={44} />
              기존 모임
            </S.SelectButton>
          </Flex>
        </main>
        <Button
          height={12}
          borderRadius={12}
          onClick={() => navigate(ROUTE.PASSWORD_SETUP())}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default SelectGroup;
