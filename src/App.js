import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import setAuthToken from './redux/utils/setAuthToken'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
if(localStorage.token){
  setAuthToken(localStorage.token)
}

// const  App =() =>{
//   useEffect(()=>{
//     store.dispatch(loadUser())
//   },[])
function App() {
return (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </>
);
}

export default App;