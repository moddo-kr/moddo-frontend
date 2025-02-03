import { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { SignUpContext } from './SignUpContext.type';

interface NameStepProps extends BaseFunnelStepComponentProps<SignUpContext> {
  defaultName?: string;
}

function NameStep({ moveToNextStep, defaultName }: NameStepProps) {
  const [name, setName] = useState(defaultName || '');

  return (
    <Stack>
      <Input
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        disabled={!name}
        type="button"
        onClick={() => moveToNextStep?.({ name })}
      >
        다음
      </Button>
    </Stack>
  );
}

export default NameStep;
