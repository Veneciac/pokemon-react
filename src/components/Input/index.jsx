import React from 'react';
import { CustomInput } from './style';

const Input = props => {
  return (
    <CustomInput { ...props } />
  );
};

export default Input;
