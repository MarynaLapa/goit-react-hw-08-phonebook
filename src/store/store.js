import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { contactsReducer } from "./Contacts/sliceContacts";
import { filterReducer } from "./Filter/sliceFilter";
import { authReducer } from "./Auth/authSlice";
import { rootReducer } from "./Root/rootSlice";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer) 

export const store = configureStore({
    reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    auth: persistedReducer,
    root: rootReducer,
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export const persistr = persistStore(store)