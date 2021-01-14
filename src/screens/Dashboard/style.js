import styled from '@emotion/styled';
import { Row } from 'antd';

import { Image } from 'components';
import { Colors } from 'constant';

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
`;

export { Container, CardContainer };