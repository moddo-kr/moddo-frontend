import { FallbackProps } from 'react-error-boundary';
import Button from '@/shared/ui/Button';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';

function DefaultErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <Flex direction="column" alignItems="center" gap={16} height="100%">
      <Text variant="heading2" color="semantic.text.default">
        문제가 발생했어요.
      </Text>
      <Button variant="primary" onClick={resetErrorBoundary}>
        다시 시도하기
      </Button>
    </Flex>
  );
}

export default DefaultErrorFallback;
