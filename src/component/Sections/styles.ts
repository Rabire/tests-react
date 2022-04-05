import styled from 'styled-components';

export const Container = styled.section`
  background: lightgreen;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(30rem, auto);

  div:nth-child(1) {
    grid-column: 1/5;
    grid-row: 1/3;

    /* height: 1500px; */
  }

  div:nth-child(2) {
    grid-column: 5/7;
  }

  div:nth-child(3) {
    grid-column: 5/7;
  }
`;

export const Section = styled.div`
  background: dodgerblue;
`;
