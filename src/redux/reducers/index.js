import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import userProfile from './userProfile'
import storage from 'redux-persist/lib/storage';
import  loader from './loader'

const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    alert,
    auth,
    profile,
    loader,
    post,
    userProfile
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;