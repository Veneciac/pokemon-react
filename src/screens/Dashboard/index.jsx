import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loading, PokeCard } from 'components';
import { GET_POKEMONS } from 'graphQLClient/query/pokemon';

import {  Navbar } from './Components';
import { Container, CardContainer } from './style';

const Dashboard = props => {
  const history = useHistory();

  const gqlVariables = {
    limit: 50,
    offset: 1,
  };
  const {
    loading, error, data
  } = useQuery(GET_POKEMONS, { variables: gqlVariables, });
  if (error) console.log(`Error! ${error.message}`);

  const onClickDetail = name => {
    history.push(`/detail/${name}`);
  };

  const onClickHome = () => {
    history.push('/');
  };

  const onClickMyPokemon = () => {
    history.push('/my-pokemon');
  };

  return (
    <Container >
      <Navbar pokemons={ props.pokemons.length !== 0 ? props.pokemons.length : '' } onClickMyPokemon={ onClickMyPokemon } onClickHome={ onClickHome }/>

      { loading && <Loading/> }
      <CardContainer>
        {
          !loading && data && data.pokemons.results.map(pokemon => <PokeCard image={ pokemon.image } title={ pokemon.name } desc={ pokemon.id } onClickDetail={ onClickDetail } key={ pokemon.id } />)
        }
      </CardContainer>
    </Container>
  );
};

const mapStateToProps = state => ({ pokemons: state.pokemon.list });

export default connect(mapStateToProps)(Dashboard);
