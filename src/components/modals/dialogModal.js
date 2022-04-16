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
        <div className="mt-5">
          <div>Do you really want to delete this item?</div>
          <div className="flex flex-row justify-between p-2">
            <button onClick={deleteFunction} className='border-2 w-full mr-1 border-red-500 bg-red-500 text-white rounded-full'>YES</button>
            <button onClick={onCloseModal} className='border-2 w-full ml-1 border-green-500 bg-green-500 text-white rounded-full'>NO</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;
