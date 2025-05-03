import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import adminReducer from './features/adminSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer=combineReducers({
    user:userReducer,
    admin:adminReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user','admin']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false
        })
})

export const persister=persistStore(store)