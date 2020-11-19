import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './AppModal.css'


Modal.setAppElement('body');


const AppModal = (props) => {
  return (
    <div>
      <button onClick={props.toggleModal}>{props.modalButton}</button>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.toggleModal}
        contentClassName="app-modal"
        contentLabel="Create Planet"
      >
        <button onClick={props.toggleModal}>{props.closeButton}</button>
        {props.children}
      </Modal>
    </div>
  );
}



AppModal.prototype = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalButton: PropTypes.string.isRequired,
  closeButton: PropTypes.string
}

AppModal.defaultProps = {
  closeButton: 'Close'
}

export default AppModal;
