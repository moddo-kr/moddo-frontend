import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import { ErrorText } from '../index.styles';
import { useNavigate } from 'react-router-dom';
import Header from '@/common/components/header';

const passwordSchema = z.object({
  password: z
    .string()
    .length(4, { message: '비밀번호는 4자리 숫자로 입력해주세요.' })
    .regex(/^\d+$/, { message: '비밀번호는 숫자로만 입력해주세요.' }),
});

function PasswordSetup() {
  const { groupName, password, setPassword } = useGroupSetupStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password },
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onNext = (data: { password: string }) => {
    setPassword(data.password);
    // navigate('/groupSetup/participants');
  };

  return (
    <>
      <Header title="" showIcon type="TitleLeft" handleBackButtonClick={() => navigate(-1)}/>
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
          <Text fontSize={20} whiteSpace="pre-wrap" fontWeight={600} mb={8}>
            {groupName} 모임의
            <br />
            비밀번호를 설정해주세요.
          </Text>
          <Input
            borderRadius={12}
            placeholder="4자리 숫자 입력"
            fontSize={16}
            py={3}
            height={12}
            {...register('password')}
            mb={4}
          />
          {errors.password && (
            <ErrorText>* {errors.password?.message?.toString()}</ErrorText>
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

export default PasswordSetup;
