import styled from 'styled-components';

export const CardsList = styled.div`
  background: pink;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  margin: 3rem auto;
`;
