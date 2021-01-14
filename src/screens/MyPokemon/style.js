import styled from '@emotion/styled';
import { Row } from 'antd';

import { Colors } from 'constant';
import { Screen } from 'helpers';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${Colors.white.snow};
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  padding: 20px;

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

const Navbar = styled(Row)`
  min-height: 50px;
  align-items: center;
  display: flex;
  background-color: ${Colors.red.default};

  .back-icon {
    color: ${Colors.white.default};
    position: absolute;
    left: 10px;
  }

  .nav-title {
    color: ${Colors.white.default};
    font-size: 16px;
    margin-top: unset;
    margin-bottom: unset;
    font-weight: bold;
    margin-left: 20px;
    text-align: center;
  }
`;

export {
  Container, CardContainer, Navbar
};