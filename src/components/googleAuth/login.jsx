
import React from 'react';
import {useGoogleLogin} from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';
import data from "../../mock/data.json";

import { useDispatch } from 'react-redux';
import { createList, setEmail, setName, setImage} from '../../redux/actions'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLoginButton = ({setToken}) => {
    const dispatch = useDispatch();
    const onSuccess = (res) => {
         console.log(`[Login Success] currentUser` );
         setToken('User Logged In');
         dispatch(createList(data))
         dispatch(setName(res.profileObj.name));
         dispatch(setEmail(res.profileObj.email))
         dispatch(setImage(res.profileObj.imageUrl))
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
            <button onClick={signIn} className="w-40 h-10 border-2 rounded-full border-emerald-600">
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginButton;