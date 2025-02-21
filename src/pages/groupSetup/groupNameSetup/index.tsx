import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from '@/assets/svgs/icon';
import Text from '@/common/components/Text';
import Header from '@/common/components/Header';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import { ROUTE } from '@/common/constants/route';
import DescriptionField from '@/common/components/DescriptionField';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Button from '@/common/components/Button';
import Input from '@/common/components/Input';
import * as S from '../index.styles';

const groupNameSchema = z.object({
  groupName: z
    .string()
    .min(1, { message: '모임 이름을 1글자 이상 입력해주세요.' }),
});

function GroupNameSetup() {
  const { unit } = useTheme();
  const { groupName, setGroupName } = useGroupSetupStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(groupNameSchema),
    defaultValues: { groupName },
    mode: 'onChange',
  });

  const onNext = (data: { groupName: string }) => {
    setGroupName(data.groupName);
    navigate(ROUTE.groupSetupPassword);
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
        title={`생성할 모임의\n이름을 입력해주세요.`}
        sub="모임 이름은 수정이 불가능해요. "
      />
      <S.PageContentWrapper>
        <Input placeholder="모또 미팅" {...register('groupName')} />
        {errors.groupName ? (
          <Text as="p" variant="caption" color="semantic.state.danger">
            {errors.groupName?.message?.toString()}
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

export default GroupNameSetup;
