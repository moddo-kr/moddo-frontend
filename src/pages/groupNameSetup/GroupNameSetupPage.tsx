import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import {
  ActionArea,
  DescriptionField,
  Header,
  Input,
} from '@/shared/design-system/ui';
import * as S from './GroupNameSetupPage.styles';

const groupNameSchema = z.object({
  groupName: z
    .string()
    .min(1, { message: '모임 이름을 1글자 이상 입력해주세요.' }),
});

interface GroupNameSetupProps {
  onNext: (groupName: string) => void;
}

function GroupNameSetupPage({ onNext }: GroupNameSetupProps) {
  const { unit } = useTheme();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(groupNameSchema),
    mode: 'onChange',
  });

  return (
    <>
      <Header
        type="default"
        headingIcon={<ArrowLeft width={unit[24]} />}
        headingLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      <DescriptionField
        title={`생성할 모임의\n이름을 입력해주세요.`}
        sub="모임 이름은 수정이 불가능해요. "
      />
      <S.PageContentWrapper>
        <Input placeholder="모또 미팅" {...register('groupName')} />
        {errors.groupName ? (
          <S.ValidationMessage>
            {errors.groupName?.message?.toString()}
          </S.ValidationMessage>
        ) : null}
      </S.PageContentWrapper>
      <ActionArea
        mainAction={{
          label: '다음',
          onClick: handleSubmit((data) => onNext(data.groupName)),
          disabled: !isValid,
        }}
      />
    </>
  );
}

export default GroupNameSetupPage;
