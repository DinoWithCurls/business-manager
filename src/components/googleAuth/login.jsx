
import React, {useEffect} from 'react';
import {useGoogleLogin} from 'react-google-login';

import { refreshTokenSetup } from '../../utils/refreshTokenSetup';
//import { useDispatch, useSelector } from 'react-redux';
//import { setLogin, setEmail, setName, setImage} from '../../redux/actions'
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GoogleLoginButton = ({setToken}) => {
    //const dispatch = useDispatch();
    //const isLoggedIn = useSelector(state => state.loginReducer.login)
    const onSuccess = (res) => {
         console.log(`[Login Success] currentUser` );
         setToken('User logged in')
         //dispatch(setLogin())
         //dispatch(setName(res.profileObj.name));
         //dispatch(setEmail(res.profileObj.email))
         //dispatch(setImage(res.profileObj.imageUrl))
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
     useEffect(()=>{
         //if(isLoggedIn){
            //setLoggedInState(true);
         //}
     }, []);
    return (
        <div>
            <button onClick={signIn} className="w-40 h-10 border-2 rounded-full border-emerald-600">
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginButton;