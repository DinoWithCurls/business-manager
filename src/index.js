import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'

import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './redux/loginReducer';
import listReducer from './redux/listReducer';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const persistConfig = {
    key:'root',
    storage: storage
}

const rootReducer = combineReducers({
    loginReducer: persistReducer(persistConfig, loginReducer),
    listReducer:persistReducer(persistConfig, listReducer)
});

const store = createStore(rootReducer,composedEnhancer)
const persistor = persistStore(store);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
