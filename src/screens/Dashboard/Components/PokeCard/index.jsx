import React from 'react';

import { Container, StyledImage } from './style';

const PokeCard = props => {
  let {
    id, name, image, onClickDetail
  } = props;
  return (
    <Container onClick={ () => onClickDetail(name) }>
      <StyledImage src={ image }/>
      <h6>
        { name }
      </h6>
      <p>{ id }</p>
    </Container>
  );
};

export default PokeCard;
