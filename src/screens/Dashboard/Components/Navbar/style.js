import styled from '@emotion/styled';
import { Row } from 'antd';

import { Image } from 'components';
import { Colors } from 'constant';
import { Screen } from 'helpers';

const Navbar = styled(Row)`
  min-height: 50px;
  align-items: center;
  display: flex;
  background-color: ${Colors.red.default};

  .nav-title {
    color: ${Colors.white.default};
    font-size: 16px;
    margin-top: unset;
    margin-bottom: unset;
    font-weight: bold;
    margin-left: 20px;
  }
 
  .nav-owned {
    color: ${Colors.white.default};
    font-size: 16px;
    margin-top: unset;
    margin-bottom: unset;
    font-weight: bold;
    margin-left: 10px;
  }
  @media ${Screen.sizesMin.xs} {
    .nav-owned {
      margin-right: 20px;
    }
  }
`;

const NavBarImage = styled(Image)`
  width: 28px;
  height: 28px;
`;

export { Navbar, NavBarImage };