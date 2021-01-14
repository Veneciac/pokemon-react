import React from 'react';
import { CustomButton } from './style';

const Button = props => {
  return (
    <CustomButton size='large' { ...props } />
  );
};

export default Button;
