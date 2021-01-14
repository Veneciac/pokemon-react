import styled from '@emotion/styled';
import { Colors } from 'constant';
import { Image, Button } from 'components';

const Container = styled.div`
  background-color: ${Colors.white.default} ;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

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

const ReleaseButton = styled(Button)`
  border-radius: 10px;
`;

export {
  Container, StyledImage, ReleaseButton
};