import React from 'react';
import GoogleLoginButton from '../components/googleAuth/login';
function SignIn({setToken}) {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1>Hello</h1>
            <GoogleLoginButton setToken={setToken} />
        </div>
    );
}
export default SignIn;