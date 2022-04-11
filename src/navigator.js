import React from 'react';
//import SignIn from './pages/signIn';
import Home from './pages/home';

const Navigator = () => {
    //const [logged, isLogged] = useState(false);
    //const [loginStatus, setLoginStatus] = useState(false);
    //useEffect(()=>{
        //if(logged) {
            //setLoginStatus(true);
        //}
    //}, [logged])
    return <Home />
    //return (loginStatus===true ? <Home /> : <SignIn isLogged={isLogged}/>);
}

export default Navigator;