import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10rem;
  padding: 2rem;
  background-color: pink;
`;

export const Title = styled.h1`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  background-color: rgba(255, 99, 71, 0.3);
  white-space: nowrap;
  line-height: 100%;

  ::after {
    content: '';
    display: block;
    background: dodgerblue;
    height: 1em;
    width: 100%;
  }

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;
