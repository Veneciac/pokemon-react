import styled from '@emotion/styled';

import { Colors } from 'constant';
import { Screen } from 'helpers';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${Colors.white.snow};
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  padding: 15px;

  @media ${Screen.sizesMin.xs} {
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    padding: 20px;
  }

  @media ${Screen.sizesMin.sm} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    padding: 20px;
  }

  @media ${Screen.sizesMin.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    padding: 20px;
  }
`;

export { Container, CardContainer };