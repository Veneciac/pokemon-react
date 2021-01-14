import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Row } from 'antd';
import { Loading } from 'components';
import { GET_DETAIL_POKEMON } from 'graphQLClient/query/pokemon';

import {
  Container, StyledImage, ImageContainer, StyledTag
} from './style';

const Detail = props => {
  const [pokemon, setPokemon] = useState(null);
  const gqlVariables = { name: props.match.params.name };
  const {
    loading, error, data
  } = useQuery(GET_DETAIL_POKEMON, { variables: gqlVariables, });
  
  if (error) console.log(`Error! ${error.message}`);

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  const generateRandomColor = () => {
    let colorList = [
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime'
    ];

    var color = Math.floor(Math.random() * colorList.length);
    return colorList[color];
  };
  return (
    <Container>
      { loading && <Loading/> }
      {
        !loading && pokemon && <div>
          <Row>
            <ImageContainer>
              <div className='background-img' />
              <StyledImage src={ pokemon.sprites.front_default }/>
            </ImageContainer>
          </Row>
          <Row justify='center'>
            <h1>
              { pokemon.name }
            </h1>
          </Row>
          <Row justify='center'>
            <h3>
              Type: { pokemon.types.map(x => x.type.name).join(', ') }
            </h3>
          </Row>
          <Row justify='center'>
            {
              pokemon.moves.slice(-15).map((x, i) => <StyledTag key={ i } color={ generateRandomColor() }>{ x.move.name }</StyledTag>)
            }
          </Row>
        </div>
      }
    </Container>
  );
};

export default Detail;
