import { useTheme } from 'styled-components';
import { ExpenseLink } from '@/entities/expense/model/expense.type';
import { Copy } from '@/shared/assets/svgs/icon';
import copyClipboard from '@/shared/lib/copyClipboard';
import { TextButton } from '@/shared/design-system/ui';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import { showToast } from '@/shared/ui/Toast';

function LinkBox({ name, url }: ExpenseLink) {
  const theme = useTheme();

  const copyLink = async (text: string) => {
    const isCopied = await copyClipboard(text);
    if (isCopied) {
      showToast({ type: 'success', content: '링크 복사 완료!' });
    }
  };

  return (
    <Flex
      borderWidth={1}
      borderColor={theme.color.semantic.border.default}
      borderStyle="solid"
      borderRadius={20}
      py={16}
      px={20}
      gap={8}
      direction="column"
      bgColor={theme.color.semantic.background.normal.default}
    >
      <Text variant="body1Sb" color="semantic.text.default">
        {name}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" gap={4}>
        <Text
          variant="caption"
          color="semantic.text.subtle"
          display="inline-block"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {url}
        </Text>
        <TextButton onClick={() => copyLink(url)}>
          <Copy width={theme.unit[16]} height={theme.unit[16]} />
        </TextButton>
      </Flex>
    </Flex>
  );
}

export default LinkBox;
