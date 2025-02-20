import { ReactElement } from 'react';
import Text from '@/common/components/Text';
import * as S from './index.styles';

interface DescriptionFieldProps {
  title: string | ReactElement;
  sub?: string | ReactElement;
}

function DescriptionField({ title, sub }: DescriptionFieldProps) {
  return (
    <S.Wrapper>
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
