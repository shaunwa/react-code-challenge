import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body');


const AppModal = (props) => {
  return (
    <div>
      <button onClick={props.openModal}>{props.modalButton}</button>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Create Planet"
      >
        <button onClick={props.closeModal}>{props.closeButton}</button>
        {props.children}
      </Modal>
    </div>
  );
}



AppModal.prototype = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  modalButton: PropTypes.string.isRequired,
  closeButton: PropTypes.string
}

AppModal.defaultProps = {
  closeButton: 'Close'
}

export default AppModal;
