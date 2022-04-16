import React from 'react';
import GoogleLogoutButton from './googleAuth/logout';
import { useSelector } from 'react-redux'


function Profile({setToken}){
    const username = useSelector(state => state.loginReducer.name);
    const email = useSelector(state => state.loginReducer.email);
    const imageUrl = useSelector(state => state.loginReducer.imageUrl)
    return (
        <div className="p-7 bg-amber-200 h-screen border-2 ">
          <div className=" px-4">
            <img
              src={imageUrl ? imageUrl : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"}
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none justify-center items-center"
            />
          </div>
          <span className="m-3"></span>
          <div className='font-mono text-sm'>{username}</div>
          <div className='font-mono text-sm'>{email}</div>
          <div className="align-center justify-center p-2">
            <GoogleLogoutButton setToken={setToken} />
          </div>
        </div>
    );
}
export default Profile;