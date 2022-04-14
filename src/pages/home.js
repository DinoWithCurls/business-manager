import React, {useEffect, useState} from "react";
import data from "../mock/data.json";
import Profile from "../components/profileTab";
import ItemCard from "../components/itemCard";
import CrudButton from "../components/crudButton";
import ModalComponent from "../components/modal";
function Home() {
  const [addModalState, openAddModal] = useState(false);
  const [items, getItems] = useState([]);
  const onOpen = () => {
    openAddModal(true)
  }
  const onClose = () => {
    openAddModal(false);
  }
  const addItem = (val) => {
    var jsonArray = JSON.parse(JSON.stringify(val))
    getItems(val);
    data.push(jsonArray)
  }
  useEffect(()=>{
    console.log(JSON.stringify(items))
  }, [items])
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 mr-1.5">
        <Profile />
      </div>
      <div className="basis-4/5">
        <div className="flex flex-col">
          <div className="h-32 relative ">
            <div className="font-serif h-16 border-b-2 justify-end">
              <header className="text-center mt-3 text-3xl">
                BUSINESS MANAGER
              </header>
            </div>
            <div className="absolute bottom-1 right-5">
              <CrudButton buttonType={"ADD"} onClick={onOpen}/>
            </div>
          </div>
          {addModalState ? (<ModalComponent open={addModalState} buttonType={'ADD'} onCloseModal={onClose} item={null} addItem={addItem} />) : null}
          <div>
            <div>
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
