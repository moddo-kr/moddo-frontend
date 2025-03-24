import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Add, CheckCircle } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { ROUTE } from '@/common/constants/route';
import DescriptionField from '@/common/components/DescriptionField';
import Text from '@/common/components/Text';
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
        title="뒤로가기"
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => navigate(-1)}
        bgColor="#f1f3f5"
      />
      <Flex
        direction="column"
        justify="space-between"
        height="100%"
        pt="10px"
        flexGrow={1}
        bgColor="#f1f3f5"
      >
        <main>
          <DescriptionField
            title={
              <Flex direction="column">
                <Text variant="heading2" color="semantic.text.strong">
                  정산을 시작하려는
                </Text>
                <Text variant="heading2" color="semantic.text.strong">
                  모임을 선택해 주세요.
                </Text>
              </Flex>
            }
            sub="새로운 정산을 시작하려면 새로 생성을 선택해주세요."
            bgColor="semantic.primary.subtle"
          />

          <Flex gap="2" direction="column" mx={5} mt={5}>
            <S.SelectButton
              selected={selectedValue === 'CREATE'}
              onClick={() => navigate(ROUTE.groupSetup)}
            >
              <Add width={30} />
              <Text variant="body1Sb" color="semantic.text.inverse">
                새로 생성
              </Text>
            </S.SelectButton>
            <S.SelectButton
              selected={selectedValue === 'RECENT'}
              onClick={() => handleButtonClick('RECENT')}
              disabled
            >
              <CheckCircle
                width={30}
                height={30}
                fill={theme.color.semantic.icon.disabled}
              />
              <Text variant="body1Sb" color="semantic.text.subtle">
                기존 모임이 없어요.
              </Text>
            </S.SelectButton>
          </Flex>
        </main>
      </Flex>
    </>
  );
}

export default SelectGroup;
