import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Row, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

import { addPokemon } from 'store/pokemon/actions';
import { Loading,  } from 'components';
import { CatchModal } from './Components';
import { GET_DETAIL_POKEMON } from 'graphQLClient/query/pokemon';

import {
  Container, StyledImage, ImageContainer, StyledTag, CatchButton
} from './style';

const Detail = props => {
  const history = useHistory();

  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState('');
  const [validation, setValidation] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [modal, setModal] = useState(false);

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

  const onGoBack = () => {
    history.goBack();
  };

  const onCatchPokemon = () => {
    setModal(true);
    let random = Math.random() < 0.5;
    if (random) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const addToList = () => {
    if (name) {
      let index = props.pokemons.findIndex(poke => poke.nickname == name);
      if (index === -1) {
        props.addPokemon({
          ...pokemon,
          nickname: name,
        });
        notification.success({
          message: 'Congrats for your new pokemon!',
          placement: 'bottomRight'
        });
        setName('');
        setModal(false);
        setValidation('');
      } else {
        setValidation('Please choose another nickname!');
      }
    } else {
      setValidation('Please input name!');
    }
  };

  return (
    <Container>
      { loading && <Loading/> }
      <Row>
        <div onClick={ onGoBack } className='back-container'>
          <IoIosArrowBack className='back-icon' size='30'/>
          <p>Back</p>
        </div>
      </Row>
      {
        !loading && pokemon && <>
          <div>
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
          <Row justify='center'>
            <CatchButton onClick={ onCatchPokemon }>
              Catch
            </CatchButton>
          </Row>
        </>
      }
      <CatchModal
        setModal={ setModal } setName={ setName } isSuccess={ isSuccess } pokemon={ pokemon } visible={ modal } name={ name } validation={ validation } addToList={ addToList }
      />
    </Container>
  );
};

const mapStateToProps = state => ({ pokemons: state.pokemon.list });

const mapDispatchToProps = { addPokemon };
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
