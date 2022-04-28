import styled, { css } from 'styled-components';
import {} from 'styles/theme';

const bottomElementContainerStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .to-bottom {
    margin-top: auto;
  }
`;

export const MobileContainer = styled.div`
  background: pink;
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;

  ${bottomElementContainerStyles}
`;

export const Button = styled.button`
  background: darkgrey;
  padding: 1rem 3rem;
  margin: 0 auto;
  border-radius: 1rem;
`;

export const Content = styled.div`
  background: white;
  border-radius: 1rem;
  height: 15rem;
  margin-bottom: 1rem;
`;
