import styled from 'styled-components';
import createShimmer from 'styles/shimmer';
import { Color, FontSize } from 'styles/theme';

export const CardBox = styled.div`
  background: ${Color.UtilityLight};

  .loading-img,
  img {
    height: 20rem;
    width: 100%;
    ${createShimmer('100%', '')}
  }
`;

export const Content = styled.div<{ isLoading: boolean }>`
  margin: 1rem;

  h3 {
      font-size ${FontSize.Title};
      margin-bottom: 0.5rem;
      ${(props) => props.isLoading && createShimmer('70%')}
  }

  p {
      ${(props) => props.isLoading && createShimmer('100%')}
  }

`;
