import React from "react";
import CrudButton from "./crudButton";
const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-row border-2 rounded-sm w-full justify-between">
      <div className=''>
        <ul>
          <li>ID: {item.id}</li>
          <li>Name: {item.customer_name}</li>
          <li>EMail: {item.customer_email}</li>
          <li>Product: {item.product}</li>
          <li>Quantity: {item.quantity}</li>
        </ul>
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
