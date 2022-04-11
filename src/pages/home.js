import React from "react";
//import data from '../mock';
//import GoogleLogoutButton from "../components/googleAuth/logout";
import Profile from "../components/profileTab";
function Home() {
  return (
    <div className="flex flex-row">
      {/*Container Div */}
      <div className="basis-1/5 mr-1.5">
        <Profile />
      </div>
      <div className="basis-4/5">
        <div className="flex flex-col">
          <div className="bg-zinc-300 h-12 justify-end">
            <header className="text-center mt-3 text-3xl">
              Business Manager
            </header>
          </div>
          <button
            className=""
            onClick={() => console.log("Add button pressed")}
          >
            Add New Data
          </button>{" "}
          {/* The div with Add button */}
          <div>
            {/*The main block for rendering data */}
            Items
            <div>item</div>
            {/*Child div storing data, with Edit and Delete Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
