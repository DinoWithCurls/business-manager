import React, {useState, useEffect} from 'react';
import GoogleLoginButton from '../components/googleAuth/login';
function SignIn({isLogged}) {
    const [loggedInState, setLoggedInState] = useState(false)
    useEffect(()=>{
        if(loggedInState) {
            isLogged(true);
        }
    }, [])
    return (
        <div>
            <h1>Hello</h1>
            <GoogleLoginButton setLoggedInState={setLoggedInState} />
        </div>
    );
}
export default SignIn;