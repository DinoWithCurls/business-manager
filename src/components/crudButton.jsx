import React from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
const CrudButton = ({ buttonType, onClick}) => {

  return (
    <button
      className="bg-amber-400 hover:bg-amber-600 text-orange-700 font-bold py-2 px-4 mr-2 rounded-full flex flex-row"
      onClick={onClick}
    >
      {buttonType === "EDIT" ? (
        <PencilIcon className="h-5 w-5 mr-2 text-yellow-800" />
      ) : buttonType === "DELETE" ? (
        <TrashIcon className="h-5 w-5 mr-2 text-red-800" />
      ) : (
        <PlusIcon className="h-5 w-5 mr-2 text-green-800" />
      )}
      {buttonType}
    </button>
  );
};

export default CrudButton;
