import { styled } from 'styled-components';

export const PostListContainer = styled.ul`
  min-height: 16.25rem;
  max-width: 54rem;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2rem;
`;
