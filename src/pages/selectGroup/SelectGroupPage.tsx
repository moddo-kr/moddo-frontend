import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import { Add, CheckCircle } from '@/shared/assets/svgs/icon';
import Header from '@/shared/components/Header';
import { ROUTE } from '@/shared/config/route';
import DescriptionField from '@/shared/components/DescriptionField';
import Text from '@/shared/components/Text';
import Flex from '@/shared/components/Flex';
import * as S from './SelectGroupPage.styles';

type SelectedValueType = 'CREATE' | 'RECENT';

function SelectGroupPage() {
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

export default SelectGroupPage;
