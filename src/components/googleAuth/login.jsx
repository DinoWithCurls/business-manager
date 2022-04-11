
import React from 'react';
import {useGoogleLogin} from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GoogleLoginButton = () => {
     const onSuccess = (res) => {
         console.log('[Login Success] currentUser: ', res.profileObj);
         refreshTokenSetup(res);
     }
     const onFailure = (res) => {
         console.log('[Login failed] res:',res);
     }
     const { signIn } = useGoogleLogin({
         onSuccess,
         onFailure,
         clientId,
         isSignedIn:true,
         accessType:'offline'
     })
    return (
        <div>
            <button onClick={signIn} className="w-40 h-10 border-2 border-emerald-600">
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginButton;