import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Add, CheckCircle } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { ROUTE } from '@/common/constants/route';
import * as S from './index.styles';

type SelectedValueType = 'CREATE' | 'RECENT';

function SelectGroup() {
  const [selectedValue, setSelectedValue] =
    useState<SelectedValueType>('CREATE');
  const theme = useTheme();
  const navigate = useNavigate();

  const handleButtonClick = (value: SelectedValueType) => {
    if (selectedValue === value) {
      return;
    }
    setSelectedValue(value);
  };

  return (
    <>
      {/** @Todo Header는 layout으로 분리 -> url 경로에 따라 나오게 변경 */}
      <Header
        title="모임 선택"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => navigate(-1)}
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
          <S.H1>
            <S.SmallContent>정산을 시작하려는</S.SmallContent>
            <S.MainContent>모임을 선택해 주세요</S.MainContent>
          </S.H1>
          <Flex gap="6" direction="row">
            <S.SelectButton
              selected={selectedValue === 'CREATE'}
              onClick={() => handleButtonClick('CREATE')}
            >
              <Add width={44} />
              새로 생성
            </S.SelectButton>
            <S.SelectButton
              selected={selectedValue === 'RECENT'}
              onClick={() => handleButtonClick('RECENT')}
            >
              <CheckCircle
                width={theme.unit[36]}
                height={theme.unit[36]}
                fill={theme.color.semantic.icon.disabled}
              />
              기존 모임
            </S.SelectButton>
          </Flex>
        </main>
        <Button
          height={12}
          borderRadius={12}
          onClick={() => navigate(ROUTE.groupSetupName)}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default SelectGroup;
