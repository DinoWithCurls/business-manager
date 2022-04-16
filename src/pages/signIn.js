import React from 'react';
import GoogleLoginButton from '../components/googleAuth/login';

function SignIn({setToken}) {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-amber-200'>
            <div className='font-bold text-red-900 text-2xl mb-5'>BUSINESS MANAGER</div>
            <GoogleLoginButton setToken={setToken} />
        </div>
    );
}
export default SignIn;