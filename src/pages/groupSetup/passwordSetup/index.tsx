import { Button, Flex, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import Header from '@/common/components/Header';
import { usePostCreateGroup } from '@/common/queries/group/usePostCreateGroup';
import * as S from '../index.styles';
import { useGroupSetupStore } from '../stores/useGroupSetupStore';

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
  const { mutate: createGroup } = usePostCreateGroup();

  const onNext = (data: { password: string }) => {
    setPassword(data.password);
    createGroup({ name: groupName, password });
  };

  return (
    <>
      <Header
        title=""
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
        <Flex direction="column">
          <S.TitleText>
            {groupName} 모임의
            <br />
            비밀번호를 설정해주세요.
          </S.TitleText>
          <Input
            borderRadius={12}
            placeholder="4자리 숫자 입력"
            fontSize={16}
            type="number"
            inputMode="numeric"
            py={3}
            height={12}
            {...register('password')}
            mb={4}
          />
          {errors.password && (
            <S.ErrorText>* {errors.password?.message?.toString()}</S.ErrorText>
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
