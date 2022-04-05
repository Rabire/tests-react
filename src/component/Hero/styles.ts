import styled from 'styled-components';
import { Color } from 'styles/theme';

export const Page = styled.section`
  height: 100vh;
`;

export const Heading = styled.div`
  background: pink;
  height: 40vh;

  display: flex;
  align-items: center;

  // when the modal hover the HeadingContent
  @media (max-width: 780px) {
    display: block;
    padding-top: 5rem;
  }
`;

export const HeadingContent = styled.div`
  margin: 0 5rem;

  h1 {
    max-width: 40rem;
  }
`;

export const Modal = styled.div`
  background: ${Color.UtilityLight};
  border: 2px solid silver;
  height: 45rem;
  max-width: 40rem;
  margin: 0 auto;
  transform: translateY(-40%);
`;
