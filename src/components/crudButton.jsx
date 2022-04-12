import React from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
const CrudButton = ({ buttonType, onClick}) => {

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex flex-row"
      onClick={onClick}
    >
      {buttonType === "EDIT" ? (
        <PencilIcon className="h-5 w-5 text-white" />
      ) : buttonType === "DELETE" ? (
        <TrashIcon className="h-5 w-5 text-white" />
      ) : (
        <PlusIcon className="h-5 w-5 text-white" />
      )}
      {buttonType}
    </button>
  );
};

export default CrudButton;
