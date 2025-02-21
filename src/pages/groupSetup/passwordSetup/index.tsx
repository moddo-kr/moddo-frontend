import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import DescriptionField from '@/common/components/DescriptionField';
import Input from '@/common/components/Input';
import Button from '@/common/components/Button';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Text from '@/common/components/Text';
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
  const { unit } = useTheme();
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
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width={unit[24]} />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={() => navigate(-1)}
      />
      <DescriptionField
        title={`${groupName}의\n비밀번호 4자리 숫자를 설정해주세요.`}
        sub="모임 이름은 수정이 불가능해요. "
      />
      <S.PageContentWrapper>
        <Input
          placeholder="1234"
          type="number"
          inputMode="numeric"
          {...register('password')}
        />
        {errors.password ? (
          <Text as="p" variant="caption" color="semantic.state.danger">
            {errors.password?.message?.toString()}
          </Text>
        ) : null}
      </S.PageContentWrapper>
      <BottomButtonContainer>
        <Button onClick={handleSubmit(onNext)} disabled={!isValid}>
          다음
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default PasswordSetup;
