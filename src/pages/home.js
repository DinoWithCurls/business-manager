import React, { useState } from "react";

import Profile from "../components/profileTab";
import ItemList from "../components/itemList";
import CrudButton from "../components/crudButton";
import InputModal from "../components/modals/inputModal";
import Pagination from "../utils/pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";

toast.configure();

function Home({ setToken }) {
  const [addModalState, openAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const data = useSelector((state) => state.listReducer.list);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const onOpen = () => {
    openAddModal(true);
  };
  const onAdd = () => {
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
            <InputModal
              open={addModalState}
              buttonType={"ADD"}
              onCloseModal={onClose}
              onSubmit={onAdd}
            />
          ) : null}
          <div>
            <div className="mt-36 overflow-y-auto overflow-x-hidden">
              <ItemList items={currentPosts} />
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data.length}
              paginateFront={paginateFront}
              paginateBack={paginateBack}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
