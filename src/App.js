import React from "react";
import Home from "./pages/home";
//import Navigator from './navigator';
//import { Provider } from 'react-redux';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { PersistGate } from "redux-persist/integration/react";
//import { persistStore, persistReducer } from "redux-persist";
//import thunk from "redux-thunk";

//import loginReducer from './redux/loginReducer';

//const persistConfig = {key:'root',storage: localStorage};
//Make the reducer persistable
//const rootReducer = combineReducers({ loginReducer: persistReducer(persistConfig, loginReducer) })
//Create a Redux store which houses the reducer for action, along with delayed functions(using thunkMiddleware)
//const store = createStore(rootReducer, applyMiddleware(thunk));
//Make the store persistable, so that it is not needed to be repopulated on restarting
//const persistor = persistStore(store);
//Wrap the root component with Provider, to make the Redux store(created above) and all the reducers available for use throughout all the components.
    //PersistGate is used to delay the rendering, until the persistor(persisted state) is retrieved and made available for use in current render
//function App() {<Provider store={store}><PersistGate loading={null} persistor={persistor}><Navigator /></PersistGate></Provider>}

function App(){
  return <Home />
}

export default App;
