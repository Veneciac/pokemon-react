import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { Loading } from 'components';
import { GET_POKEMONS } from 'graphQLClient/query/pokemon';

import { PokeCard, Navbar } from './Components';
import { Container, CardContainer } from './style';

const Dashboard = () => {
  const history = useHistory();

  const gqlVariables = {
    limit: 100,
    offset: 1,
  };
  const {
    loading, error, data
  } = useQuery(GET_POKEMONS, { variables: gqlVariables, });

  const onClickDetail = name => {
    history.push(`/detail/${name}`);
  };
  // if (error) console.log(`Error! ${error.message}`);
  
  // console.log('Response from server', data);

  return (
    <Container >
      <Navbar/>

      { loading && <Loading/> }
      <CardContainer>
        {
          !loading && data && data.pokemons.results.map(pokemon => <PokeCard onClickDetail={ onClickDetail } key={ pokemon.id } { ...pokemon }/>)
        }
      </CardContainer>
    </Container>
  );
};

export default Dashboard;
