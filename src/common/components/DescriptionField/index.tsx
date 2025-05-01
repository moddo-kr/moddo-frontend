import { ReactElement } from 'react';
import Text from '@/common/components/Text';
import { ColorTokenType } from '@/styles/theme.type';
import * as S from './index.styles';

interface DescriptionFieldProps {
  title: string | ReactElement;
  sub?: string | ReactElement;
  bgColor?: ColorTokenType;
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
