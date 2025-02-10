import { Button, Flex, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Header from '@/common/components/Header';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import { ROUTE } from '@/common/constants/route';
import * as S from '../index.styles';

const groupNameSchema = z.object({
  groupName: z
    .string()
    .min(1, { message: '모임 이름을 1글자 이상 입력해주세요.' }),
});

function GroupNameSetup() {
  const { groupName, setGroupName } = useGroupSetupStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(groupNameSchema),
    defaultValues: { groupName },
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onNext = (data: { groupName: string }) => {
    setGroupName(data.groupName);
    navigate(ROUTE.groupSetupPassword);
  };

  return (
    <>
      <Header
        title=""
        showIcon={false}
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
        <Flex direction="column">
          <S.TitleText>
            모임 이름을
            <br />
            입력해주세요.
          </S.TitleText>
          <Input
            borderRadius={12}
            placeholder="DND 7조 첫모임"
            fontSize={16}
            py={3}
            height={12}
            {...register('groupName')}
            mb={4}
          />
          {errors.groupName && (
            <S.ErrorText>* {errors.groupName?.message?.toString()}</S.ErrorText>
          )}
        </Flex>
        <Button
          height={12}
          borderRadius={12}
          onClick={handleSubmit(onNext)}
          disabled={!isValid}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}

export default GroupNameSetup;
