import styled from '@emotion/styled';
import { Tag } from 'antd';

import { Colors } from 'constant';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${Colors.lilac.default};

  h1 {
    margin-bottom: unset;
    margin-top: 10px;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 2;
  max-height: 375px;
  max-width: 375px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  .background-img {
    background-color: ${Colors.white.snow};
    width: 94%;
    height: 45%;
    position: absolute;
    border-radius: 100%;
    opacity: 0.5;
  }
`;

const StyledTag = styled(Tag)`
  margin: 3px;
  border-radius: 10px;
`;
export {
  Container, StyledImage, ImageContainer, StyledTag
};