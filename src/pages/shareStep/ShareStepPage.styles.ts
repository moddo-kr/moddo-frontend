import { Link } from 'react-router';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1.25rem 1rem 1.25rem;
  width: 100%;
`;

export const BottomLink = styled(Link)`
  height: 2.5rem;
  padding: 1rem 0.875rem;
  text-align: center;
  color: #292c30;
  font-size: 0.875rem;
  line-height: 150%; /* 1.3125rem */
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HamImg = styled.img`
  width: 15rem;
  height: 15rem;
`;
export const LinkImg = styled.img`
  width: 4.5rem;
  height: 3.16756rem;
  margin-bottom: -1rem;
`;
