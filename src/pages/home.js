import React, { useState } from "react";

import Profile from "../components/profileTab";
import ItemCard from "../components/itemCard";
import CrudButton from "../components/crudButton";
import ModalComponent from "../components/modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../redux/actions";

toast.configure();

function Home({setToken}) {
  const [addModalState, openAddModal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listReducer.list);
  const onOpen = () => {
    openAddModal(true);
  };
  const onSubmit = ({ item }) => {
    dispatch(addToList(item));
    toast.success("🛫 Added new data!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
  };
  const onClose = () => {
    openAddModal(false);
  };
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 mr-1.5">
        <Profile setToken={setToken} />
      </div>
      <div className="basis-4/5">
        <div className="flex flex-col">
          <div className="h-32 w-4/5 fixed bg-gray-400 ">
            <div className="font-serif h-16 justify-end">
              <header className="text-center text-3xl mt-8">
                BUSINESS MANAGER
              </header>
            </div>
            <div className="bg-gray-400">
              <div className="absolute bottom-1 right-5">
                <CrudButton buttonType={"ADD"} onClick={onOpen} />
              </div>
            </div>
          </div>
          {addModalState ? (
            <ModalComponent
              open={addModalState}
              buttonType={"ADD"}
              onCloseModal={onClose}
              onSubmit={onSubmit}
            />
          ) : null}
          <div>
            <div className="mt-36 overflow-y-auto overflow-x-hidden">
              {data.map((item) => (
                <div key={item.id} className="mb-2">
                  <ItemCard item={item} key={item.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
