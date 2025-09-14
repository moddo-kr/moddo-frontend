import { ReactElement } from 'react';
import Text from '@/shared/ui/Text';
import { ColorKey } from '@/shared/styles/theme.type';
import * as S from './index.styles';

interface DescriptionFieldProps {
  title: string | ReactElement;
  sub?: string | ReactElement;
  bgColor?: ColorKey;
}

function DescriptionField({ title, sub, bgColor }: DescriptionFieldProps) {
  return (
    <S.Wrapper $bgColor={bgColor}>
      <Text variant="heading2" color="semantic.text.strong">
        {title}
      </Text>
      {sub ? (
        <Text variant="body1R" color="semantic.text.subtle">
          {sub}
        </Text>
      ) : null}
    </S.Wrapper>
  );
}

export default DescriptionField;
