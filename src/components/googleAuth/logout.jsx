import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GoogleLogoutButton = () => {
    const onLogoutSuccess = () => {
        console.log('User logged out successfully');
        //onLogout();
    }
    const onLogoutFailure = () => {
        console.log('Logout failed')
    }
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onLogoutFailure
    })
    return (
        <button onClick={signOut} className='w-40 h-10 border-2 border-sky-600 bg-white'>
            <span>Sign out</span>
        </button>
    );
}

export default GoogleLogoutButton;
