import React from 'react';
import GoogleLogoutButton from './googleAuth/logout';
function Profile(){
    return (
        <div className="p-10 bg-amber-200 h-screen ">
          {/*Profile div, with image, Name, Email ID and Logout. Get user data from Google Login  */}
          <div className=" px-4">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <span className="m-3"></span>
          <div>Name</div>
          <div>Email</div>
          <div className="align-center justify-center p-2">
            <GoogleLogoutButton />
          </div>
        </div>
    );
}
export default Profile;