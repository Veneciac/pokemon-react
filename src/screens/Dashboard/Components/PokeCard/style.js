import styled from '@emotion/styled';
import { Row } from 'antd';
import { Colors } from 'constant';
import { Image } from 'components';

const Container = styled.div`
  background-color: ${Colors.white.default} ;
  border-radius: 15px;

  h6 {
    color: ${Colors.grey.darkLilac};
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: unset;
  }

  p {
    color: ${Colors.grey.lilac};
    font-size: 14px;
    text-align: center;
    margin-bottom: unset;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;

export { Container, StyledImage };