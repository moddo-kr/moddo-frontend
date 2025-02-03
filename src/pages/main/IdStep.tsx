import { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { SignUpContext } from './SignUpContext.type';

interface IdStepProps extends BaseFunnelStepComponentProps<SignUpContext> {
  defaultId?: string;
}

function IdStep({
  moveToPreviousStep,
  moveToNextStep,
  defaultId,
}: IdStepProps) {
  const [id, setId] = useState(defaultId ?? '');

  return (
    <Stack>
      <Input
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Stack direction="row">
        <Button type="button" onClick={() => moveToPreviousStep?.()}>
          이전
        </Button>
        <Button
          disabled={!id}
          type="button"
          onClick={() => moveToNextStep?.({ id })}
        >
          다음
        </Button>
      </Stack>
    </Stack>
  );
}

export default IdStep;
