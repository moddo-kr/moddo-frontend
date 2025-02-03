import { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { SignUpContext } from './SignUpContext.type';

interface AgeStepProps extends BaseFunnelStepComponentProps<SignUpContext> {
  name?: string;
}

function AgeStep({ moveToNextStep, moveToPreviousStep, name }: AgeStepProps) {
  const [age, setAge] = useState<number | undefined>(undefined);

  return (
    <Stack>
      <h1>{name}님 안녕하세요</h1>
      <Input
        placeholder="나이를 입력해주세요"
        value={age ?? ''}
        type="number"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <Stack direction="row">
        <Button type="button" onClick={moveToPreviousStep}>
          이전
        </Button>
        <Button
          disabled={!age}
          type="button"
          onClick={() => moveToNextStep?.({ age })}
        >
          다음
        </Button>
      </Stack>
    </Stack>
  );
}

export default AgeStep;
