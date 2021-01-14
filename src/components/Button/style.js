import styled from '@emotion/styled';
import { Button } from 'antd';
import { Colors } from 'constant';

export const CustomButton = styled(Button)`
  background-color: ${Colors.red.default};
  color: ${Colors.white.default};
  margin: 15px;
  font-weight: bold;

  &:active, :focus, :hover {
    background: ${Colors.red.default};
    border: none;
    color: ${Colors.white.default};
  }
`;
