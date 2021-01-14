import React from 'react';

import { Container, StyledImage } from './style';

const PokeCard = props => {
  let {
    id, name, url, image
  } = props;
  return (
    <Container>
      <StyledImage src={ image }/>
      <h6>
        { name }
      </h6>
      <p>{ id }</p>
    </Container>
  );
};

export default PokeCard;
