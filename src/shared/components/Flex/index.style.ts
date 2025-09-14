import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { FlexStyledProps } from '@/shared/types/styled';
import {
  processStyleProps,
  conditionalStyle,
} from '@/shared/utils/processStyle';

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<FlexStyledProps>`
  ${(props) => processStyleProps(props)};
  ${(props) =>
    conditionalStyle('display', props.inline ? 'inline-flex' : 'flex')};
  ${(props) => conditionalStyle('flex-direction', props.direction)};
  ${(props) => conditionalStyle('align-items', props.align, props.alignItems)};
  ${(props) =>
    conditionalStyle('justify-content', props.justify, props.justifyContent)};
  ${(props) => conditionalStyle('flex-wrap', props.wrap, props.flexWrap)};
  ${(props) => conditionalStyle('flex-basis', props.basis, props.flexBasis)};
  ${(props) => conditionalStyle('flex-grow', props.grow, props.flexGrow)};
  ${(props) => conditionalStyle('flex-shrink', props.shrink, props.flexShrink)};
`;
