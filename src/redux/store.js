
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import filterSlice from './globalSlice';
const { configureStore, combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
    user: userSlice,
    globalState: filterSlice
});

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user', 'access_token']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
export default store;
