import React from "react";
//import CrudButton from "./crudButton";
const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-row">
      <div>
        <ul>
          <li>{item.id}</li>
          <li>{item.customer_name}</li>
          <li>{item.customer_email}</li>
          <li>{item.product}</li>
          <li>{item.quantity}</li>
        </ul>
      </div>
      {/*<div>
        <div className="flex flex-col">
            <CrudButton buttonType={"EDIT"} />
            <CrudButton buttonType={"DELETE"} />
        </div>
  </div>*/}
    </div>
  );
};
export default ItemCard;
