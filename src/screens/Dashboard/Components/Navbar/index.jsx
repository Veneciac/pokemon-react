import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Col } from 'antd';

import { Images, Colors } from 'constant';
import { Input } from 'components';
import { NavBarImage, Navbar } from './style';

const CutomNavbar = () => {
  return (
    <Navbar>
      <Col span={ 20 }>
        <h1 className='nav-title'>
          Pokeapp
        </h1>
      </Col>
      <Col span={ 2 }>
        <NavBarImage src={ Images.pokeball }/>
        
      </Col>
      <Col span={ 2 }>
        <h1 className='nav-owned'>
          12
        </h1>
      </Col>
      { /* <Col className='nav-col-input' span={ 15 }>
        <Input suffix={ <BiSearchAlt color={ Colors.grey.lilac } size={ 24 }/> }/>
      </Col>*/ }
    </Navbar>
  );
};

export default CutomNavbar;
