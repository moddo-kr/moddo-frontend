import styled from 'styled-components';

export const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  padding: `${theme.unit[10]} ${theme.unit[20]}`,
  flexDirection: 'column',
  gap: theme.unit[4],
  whiteSpace: 'pre-line',
}));
