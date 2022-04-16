import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { useDispatch } from "react-redux";
import { deleteFromList } from "../../redux/actions";

const DialogModal = ({ open, onCloseModal, item, onSubmit }) => {
  const dispatch = useDispatch();
  const deleteFunction = () => {
    dispatch(deleteFromList(item));
    onSubmit();
    onCloseModal();
  };
  return (
    <div className="flex flex-col">
      <Modal open={open} onClose={onCloseModal} center>
        <div>Do you really want to delete this item?</div>
        <div className="flex flex-row">
          <button onClick={deleteFunction}>YES</button>
          <button onClick={onCloseModal}>NO</button>
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;