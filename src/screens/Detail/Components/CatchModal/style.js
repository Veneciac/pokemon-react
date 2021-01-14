import styled from '@emotion/styled';
import { Tag, Modal } from 'antd';
import { Button } from 'components';
import { Colors } from 'constant';

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding-bottom: 5px !important;
  }
  
  .name-validation{
    margin-top: 3px;
    color: ${Colors.red.default};
  }
`;

const ModalButton = styled(Button)`
  border-radius: 10px;
  width: ${props => props.option === 'ok' ? '50%' : '70%'};
`;

export { StyledModal, ModalButton };