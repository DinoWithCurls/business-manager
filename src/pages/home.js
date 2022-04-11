import React from "react";
import data from "../mock/data.json";
//import GoogleLogoutButton from "../components/googleAuth/logout";
import Profile from "../components/profileTab";
import ItemCard from "../components/itemCard";
import CrudButton from "../components/crudButton";
function Home() {
  return (
    <div className="flex flex-row">
      {/*Container Div */}
      <div className="basis-1/5 mr-1.5">
        <Profile />
      </div>
      <div className="basis-4/5">
        <div className="flex flex-col">
          <div>
            <div className="font-serif  h-12 justify-end">
              <header className="text-center mt-3 text-3xl">
                BUSINESS MANAGER
              </header>
            </div>
            <div className="absolute top-10 right-5">
              <CrudButton buttonType={"ADD"} />
            </div>
          </div>
          {/* The div with Add button */}
          <div>
            {/*The main block for rendering data */}
            Items
            <div>
              {data.map((item) => (
                <div key={item.id} className="mb-2">
                  <ItemCard item={item} key={item.id} />
                </div>
              ))}
            </div>
            {/*Child div storing data, with Edit and Delete Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
