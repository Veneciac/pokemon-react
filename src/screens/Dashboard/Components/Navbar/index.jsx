import React from 'react';
import { Col, Row } from 'antd';

import { Images } from 'constant';
import { NavBarImage, Navbar } from './style';

const CutomNavbar = ({
  onClickMyPokemon, onClickHome, pokemons
}) => {
  return (
    <Navbar>
      <Col onClick={ onClickHome } span={ 20 }>
        <h1 className='nav-title'>
          Pokeapp
        </h1>
      </Col>
      <Col onClick={ onClickMyPokemon } span={ 4 }>
        <Row justify='end'>
          <NavBarImage src={ Images.pokeball }/>
          <h1 className='nav-owned'>
            { pokemons }
          </h1>
        </Row>
      </Col>
    </Navbar>
  );
};

export default CutomNavbar;
