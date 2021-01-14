import React from 'react';
import { Row, Col } from 'antd';

import { Input } from 'components';
import { StyledModal, ModalButton } from './style';

const CatchModal = ({
  setModal, setName, isSuccess, pokemon, visible, name, validation, addToList
}) => {
  return (
    <StyledModal centered onCancel={ () => setModal(false) } footer={ false } visible={ visible }>
      <Row justify='center'>
        {
          isSuccess ? `Congratulations! you can now add ${pokemon.name} to your pokemon list. Choose a nickname:` : 'Sorry!! Better luck next time '
        }
      </Row>
      {
        isSuccess && <Row>
          <Input value={ name } onChange={ e => setName(e.target.value) } />
        </Row>
      }
      <Row>
        <p className='name-validation'>
          {
            validation
          }
        </p>
      </Row>
      <Row justify='center'>
        {
          isSuccess ? <>
            <Col span={ 12 }>
              <ModalButton onClick={ () => setModal(false) }>
              Cancel
              </ModalButton>
            </Col>
            <Col span={ 12 }>
              <ModalButton onClick={ addToList }>
              Add
              </ModalButton>
            </Col>
          </>
            : <ModalButton option='ok' onClick={ () => setModal(false) }>
             Ok
            </ModalButton>
        }
      </Row>
    </StyledModal>
  );
};

export default CatchModal;