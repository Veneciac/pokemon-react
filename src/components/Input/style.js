import styled from '@emotion/styled';
import { Input } from 'antd';
import { Colors } from 'constant';

export const CustomInput = styled(Input)`
  border-radius: 10px;
  background-color: rgb(245, 246, 255);
  border-color: ${Colors.grey.lightLilac};
  
  input {
    background-color: transparent;
  }
`;
