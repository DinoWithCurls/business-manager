import React, {useState} from "react";
import CrudButton from "./crudButton";
import InputModal from "./modals/inputModal";
import DialogModal from "./modals/dialogModal";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const ItemCard = ({ item }) => {
  const [openModalState, setOpenModalState] = useState(false);
  const [dialogModalState, setDialogModalState] = useState(false);
  const onOpen = () => setOpenModalState(true);
  const onClose = () => setOpenModalState(false);
  const onOpenDialog = () => setDialogModalState(true)
  const onCloseDialog = () => setDialogModalState(false);
  const onEdit = () => {
    toast.info('🔧 Edited the data!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const onDelete = () => {
    toast.warn('🗑 Deleted the data!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
  return (
    <div className="flex flex-row border-2 rounded-sm w-full justify-between">
      <div>
        <div className="text-l">
          <div className="flex flex-row font-mono"><p className="font-bold ml-2 w-24">ID </p><p>{item.id}</p></div>
          <div className="flex flex-row font-mono"><p className="font-bold ml-2 w-24">NAME </p><p>{item.customer_name}</p></div>
          <div className="flex flex-row font-mono"><p className="font-bold ml-2 w-24">EMAIL </p>{item.customer_email}</div>
          <div className="flex flex-row font-mono"><p className="font-bold ml-2 w-24">PRODUCT </p>{item.product}</div>
          <div className="flex flex-row font-mono"><p className="font-bold ml-2 w-24">QUANTITY</p>{item.quantity}</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
            <div className='m-3'><CrudButton buttonType={"EDIT"} onClick={onOpen} /></div>
            <div><CrudButton buttonType={"DELETE"} onClick={onOpenDialog} /></div>
        </div>
        {openModalState ? (<InputModal open={openModalState} onCloseModal={onClose} buttonType={'EDIT'} item={item} onSubmit={onEdit} />) : null}
        {dialogModalState ? (<DialogModal open={dialogModalState} onCloseModal={onCloseDialog} item={item} onSubmit={onDelete} />) : null}
      </div>
    </div>
  );
};
export default ItemCard;
