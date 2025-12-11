import { Link } from 'react-router';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${({ theme }) => theme.color.semantic.orange.default};
  border-radius: ${({ theme }) => theme.radius.default};
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[8]}`};
  cursor: pointer;
`;
