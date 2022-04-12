import React from "react";
import data from "../mock/data.json";
import Profile from "../components/profileTab";
import ItemCard from "../components/itemCard";
import CrudButton from "../components/crudButton";
function Home() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 mr-1.5">
        <Profile />
      </div>
      <div className="basis-4/5">
        <div className="flex flex-col">
          <div className="h-32 border-2 relative ">
            <div className="font-serif  h-12 justify-end">
              <header className="text-center mt-3 text-3xl">
                BUSINESS MANAGER
              </header>
            </div>
            <div className="absolute bottom-1 right-5">
              <CrudButton buttonType={"ADD"} />
            </div>
          </div>
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
