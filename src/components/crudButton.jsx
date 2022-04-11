import React from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
const CrudButton = ({ buttonType }) => {
  return (
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex flex-row"
      onClick={() => {
        console.log(`${buttonType} pressed`);
      }}
    >
      {buttonType === "EDIT" ? (
        <PencilIcon className="h-5 w-5 text-white" />
      ) : buttonType === "DELETE" ? (
        <TrashIcon className="h-5 w-5 text-white" />
      ) : (
        <PlusIcon className="h-5 w-5 text-white" />
      )}
      {buttonType}
    </div>
  );
};

export default CrudButton;
