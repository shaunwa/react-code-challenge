import React from 'react';
import Form from '../Form/Forms';
import  './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { ModalActions } from '../store/ModalSlice';



const Modal = () => {
    const dispatch = useDispatch();
    const modalCloseHandler = () => {

        dispatch(ModalActions.Toggle());
        
    };
    return (
		<>
			<div className="modal_backdrop" onClick={modalCloseHandler} />
			<div className="modal">
				<div className="sub_modal">
					<div className="c1">
                        <Form />
                       
					</div>
				</div>
			</div>
		</>
	);

};

export default Modal;
