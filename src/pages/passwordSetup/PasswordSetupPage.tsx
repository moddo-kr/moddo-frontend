import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import DescriptionField from '@/shared/ui/DescriptionField';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Text from '@/shared/ui/Text';
import * as S from './PasswordSetupPage.styles';

const passwordSchema = z.object({
  password: z
    .string()
    .length(4, { message: '비밀번호는 4자리 숫자로 입력해주세요.' })
    .regex(/^\d+$/, { message: '비밀번호는 숫자로만 입력해주세요.' }),
});

interface PasswordSetupProps {
  groupName: string;
  onNext: (password: string) => void;
}

function PasswordSetupPage({ groupName, onNext }: PasswordSetupProps) {
  const { unit } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();

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
        <Button
          onClick={handleSubmit((data) => onNext(data.password))}
          disabled={!isValid}
        >
          다음
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default PasswordSetupPage;
