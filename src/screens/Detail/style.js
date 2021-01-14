import styled from '@emotion/styled';
import { Tag } from 'antd';
import { Button } from 'components';
import { Colors } from 'constant';
import { Screen } from 'helpers';

const Container = styled.div`
  min-height: 100vh;

  h1 {
    margin-bottom: unset;
    margin-top: 10px;
    font-weight: bold;
  }

  .back-container{
    background-color: ${Colors.red.default};
    border-radius: 20px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .back-icon {
      color: ${Colors.white.default};
    }
    p {
      color: ${Colors.white.default};
      margin-bottom: unset;
      margin-right: 10px;
      font-weight: bold;
    }
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
    max-width: 400px;
    z-index: -1;
  }
`;

const StyledTag = styled(Tag)`
  margin: 3px;
  border-radius: 10px;
`;

const CatchButton = styled(Button)`
  width: 94%;
  position: absolute;
  bottom: 15px;
  border-radius: 10px;
  max-width: 400px;
`;

export {
  Container, StyledImage, ImageContainer, StyledTag, CatchButton,
};