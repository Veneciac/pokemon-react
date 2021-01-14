import React from 'react';
import { Col } from 'antd';
import { connect } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { releasePokemon } from 'store/pokemon/actions';
import { PokeCard } from 'components';
import {
  Container, Navbar, CardContainer
} from './style';

const MyPokemon = props => {
  const history = useHistory();

  const onGoBack = () => {
    history.goBack();
  };

  const onRelease = nickname => {
    props.releasePokemon(nickname);
  };

  return (
    <Container>
      <Navbar justify='center'>
        { /* <Col span={ 3 } onClick={ onGoBack }>*/ }
        <IoIosArrowBack onClick={ onGoBack } className='back-icon' size='30'/>
        { /* </Col>*/ }
        { /* <Col span={ 21 }>*/ }
        <h1 className='nav-title'>
          My Pokemon
        </h1>
        { /* </Col>*/ }
      </Navbar>
      <CardContainer>
        {
          props.pokemons.map((pokemon, i) => {
            return (
              <PokeCard image={ pokemon.image } title={ pokemon.nickname } desc={ pokemon.name } type='owned' key={ i + 'owned' } onRelease={ onRelease } />
            );
          })
        }
      </CardContainer>
    </Container>
  );
};

const mapStateToProps = state => ({ pokemons: state.pokemon.list });
const mapDispatchToProps = { releasePokemon };

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon);
