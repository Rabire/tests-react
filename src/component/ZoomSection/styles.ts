import styled from 'styled-components';

export const ComponentBox = styled.section`
  background: coral;
  height: 100vh;

  button {
    background: snow;
    padding: 1rem;
    margin-right: 0.5rem;

    :hover {
      background: pink;
    }
  }
`;

export const MapWrapper = styled.div`
  background: pink;
  overflow: hidden;
  height: 600px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    /* transition: transform 300ms ease-in-out; */
  }
`;
