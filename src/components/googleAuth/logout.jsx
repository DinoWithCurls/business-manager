import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GoogleLogoutButton = ({setToken}) => {
    const onLogoutSuccess = () => {
        console.log('User logged out successfully');
        setToken(false)
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
        <button onClick={signOut} className='w-40 h-10 border-2 text-red-600 border-red-600 bg-yellow-400 rounded-full'>
            <span>SIGN OUT</span>
        </button>
    );
}

export default GoogleLogoutButton;
