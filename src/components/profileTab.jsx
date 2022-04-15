import React from 'react';
import GoogleLogoutButton from './googleAuth/logout';
import { useSelector } from 'react-redux'


function Profile({setToken}){
    const username = useSelector(state => state.loginReducer.name);
    const email = useSelector(state => state.loginReducer.email);
    const imageUrl = useSelector(state => state.loginReducer.imageUrl)
    return (
        <div className="p-10 bg-amber-200 h-screen ">
          <div className=" px-4">
            <img
              src={imageUrl ? imageUrl : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"}
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <span className="m-3"></span>
          <div>{username}</div>
          <div>{email}</div>
          <div className="align-center justify-center p-2">
            <GoogleLogoutButton setToken={setToken} />
          </div>
        </div>
    );
}
export default Profile;