import React from 'react';
import logo from './logo.svg';
import './App.css';

//Redux
import { createStore, } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'


import AppContainer from './screens'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [                    
  //   'accountReducer'
  // ],
  blacklist: [
    // 'late'
  ]
}

const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer);
let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
  );
}

export default App;
