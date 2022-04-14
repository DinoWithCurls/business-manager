import React, {useState} from "react";
import CrudButton from "./crudButton";
import ModalComponent from "./modal";

const ItemCard = ({ arr, item }) => {
  const [openModalState, setOpenModalState] = useState(false);
  
  const onOpen = () => setOpenModalState(true);
  const onClose = () => setOpenModalState(false);
  const clickButton = (e) => {
    const itemIndex = arr.indexOf(e)
    arr = [...arr.slice(0, itemIndex), ...arr.slice(itemIndex  + 1)];
    console.log(JSON.stringify(arr[2]))
  }
  //const deleteItem = ({l, i}) => {
    //const itemIndex = l.indexOf(item);
    //arr = [...l.slice(0, itemIndex), ...l.slice(itemIndex + 1)];
    //return arr;}
  return (
    <div className="flex flex-row border-2 rounded-sm w-full justify-between">
      <div>
        <div className="text-l">
          <div className="flex flex-row"><p className="font-bold ml-2 w-24">ID </p><p>{item.id}</p></div>
          <div className="flex flex-row"><p className="font-bold ml-2 w-24">NAME </p><p>{item.customer_name}</p></div>
          <div className="flex flex-row"><p className="font-bold ml-2 w-24">EMAIL </p>{item.customer_email}</div>
          <div className="flex flex-row"><p className="font-bold ml-2 w-24">PRODUCT </p>{item.product}</div>
          <div className="flex flex-row"><p className="font-bold ml-2 w-24">QUANTITY</p>{item.quantity}</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
            <div className='m-3'><CrudButton buttonType={"EDIT"} onClick={onOpen} /></div>
            <div><CrudButton buttonType={"DELETE"} onClick={()=> clickButton(item)} /></div>
        </div>
        {openModalState ? (<ModalComponent open={openModalState} onCloseModal={onClose} buttonType={'EDIT'} item={item} />) : null}
      </div>
    </div>
  );
};
export default ItemCard;
