import React, { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useQuery } from '@apollo/client';
import { Col } from 'antd';

import { Images, Colors } from 'constant';
import { Input, Loading } from 'components';
import { GET_POKEMONS } from 'graphQLClient/query/pokemon';

import { PokeCard, Navbar } from './Components';
import { Container, CardContainer } from './style';

const Dashboard = () => {
  const gqlVariables = {
    limit: 100,
    offset: 1,
  };
  const {
    loading, error, data
  } = useQuery(GET_POKEMONS, { variables: gqlVariables, });
  
  // if (error) console.log(`Error! ${error.message}`);
  
  console.log('Response from server', data);

  return (
    <Container >
      <Navbar/>
      { loading && <Loading/> }
      <CardContainer>
        {
          !loading && data && data.pokemons.results.map(pokemon => <PokeCard key={ pokemon.id } { ...pokemon }/>)
        }
      </CardContainer>
    </Container>
  );
};

export default Dashboard;
