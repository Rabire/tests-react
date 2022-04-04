import { css, keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
  from { background-position: 100% 100%; }
  to { background-position: 0 0; }
`;

const createShimmer = (width: string, height = '1em') => css`
  height: ${height};
  max-width: ${width};

  background-image: linear-gradient(
    90deg,
    #eeeeee 0%,
    #eeeeee 40%,
    #dddddd 50%,
    #dddddd 55%,
    #eeeeee 65%,
    #eeeeee 100%
  );

  background-size: 400%;
  animation: ${shimmerAnimation} 1500ms infinite;
`;

export default createShimmer;
