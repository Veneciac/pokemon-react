import React from 'react';
import { Images } from 'constant';
import { Container } from './style';

const Loading = () => {
  return (
    <Container >
      <img src={ Images.loading } />
    </Container>
  );
};

export default Loading;
