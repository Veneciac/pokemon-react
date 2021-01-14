import React from 'react';

import {
  Container, StyledImage, ReleaseButton
} from './style';

const PokeCard = props => {
  let {
    title, desc, image, onClickDetail, onRelease, type,
  } = props;

  const onClick = () => {
    if (onClickDetail) {
      onClickDetail(title);
    }
  };

  const onClickRelease = () => {
    if (onRelease) {
      onRelease(title);
    }
  };

  return (
    <Container onClick={ onClick }>
      <StyledImage src={ image }/>
      <h6>
        { title }
      </h6>
      <p>{ desc }</p>

      {
        type === 'owned' &&  <ReleaseButton onClick={ onClickRelease }>
        Release
        </ReleaseButton>
      }
    </Container>
  );
};

export default PokeCard;
