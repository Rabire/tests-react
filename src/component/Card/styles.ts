import styled from 'styled-components';
import { FontSize } from 'styles/theme';

export const CardBox = styled.div`
  background: lightgreen;

  img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
`;

type Props = {
  isLoading: boolean;
};

export const Content = styled.div<Props>`
  margin: 1rem;

  h3 {
      font-size ${FontSize.Title};
  }

`;
