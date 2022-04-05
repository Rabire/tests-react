import styled from 'styled-components';

export const Container = styled.section`
  background: lightgreen;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  max-width: 101rem; // 50*2 + 1
  margin: 0 auto;
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
