import {legacy_createStore as createStore, combineReducers} from 'redux';
import mainReducer from './reducers/appReducer';

const rootReducer = mainReducer;

const store = createStore(rootReducer);

export default store;

// 👇 RootState type derived from store itself
export type RootState = ReturnType<typeof store.getState>;
