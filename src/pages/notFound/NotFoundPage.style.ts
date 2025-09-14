import Text from '@/shared/ui/Text';
import styled from 'styled-components';

export const Hamster = styled.img`
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
`;
