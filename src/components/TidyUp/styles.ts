import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 1rem;
  background: dodgerblue;
  padding: 2rem;
  color: white;
`;

export const CardsList = styled.div`
  background: lightseagreen;
  margin: 3rem auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 1.5rem;
`;

export const Card = styled.div`
  background: lightcoral;
  padding: 2rem;

  color: white;
  text-align: center;

  &.draggable {
    cursor: move;
  }
`;
