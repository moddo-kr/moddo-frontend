import Text from '@/common/components/Text';
import styled from 'styled-components';

export const ErrorHamster = styled.img`
  width: 14.875rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.unit[16]};
  height: 100vh;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const SubText = styled(Text)`
  text-align: center;
  white-space: pre-line;
`;
