import { useTheme } from 'styled-components';
import Lottie from 'lottie-react';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import RawLoadingDdoddo from '@/shared/assets/lotties/loading-ddoddo.json';

interface LoadingProps {
  hideImage?: boolean;
}

function Loading({ hideImage = false }: LoadingProps) {
  const theme = useTheme();

  return (
    <Flex
      backgroundColor={theme.color.semantic.background.normal.default}
      height="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      {!hideImage && <Lottie animationData={RawLoadingDdoddo} />}
      <Flex direction="column" alignItems="center" gap={4}>
        <Text variant="heading2" color="semantic.text.strong">
          LOADING...
        </Text>
        <Text variant="body1R" color="semantic.text.subtle">
          잠시만 기다려주세요
        </Text>
      </Flex>
    </Flex>
  );
}

export default Loading;
