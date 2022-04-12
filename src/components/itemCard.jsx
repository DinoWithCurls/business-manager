import React, {useState} from "react";
import CrudButton from "./crudButton";

const ItemCard = ({ item }) => {
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
            <div className='m-3'><CrudButton buttonType={"EDIT"} /></div>
            <div><CrudButton buttonType={"DELETE"} /></div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
