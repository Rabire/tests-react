import styled from 'styled-components';

export const Container = styled.section`
  background: lightgreen;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 105rem; // 50*2 + 1(gap) + 2*2(padding)
`;

export const SectionGroup = styled.div`
  background: pink;
  display: grid;
  gap: 1rem;
`;

export const Section = styled.div`
  background: dodgerblue;
  height: 30rem;
`;
