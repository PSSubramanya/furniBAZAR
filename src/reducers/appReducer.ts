import {combineReducers} from 'redux';
import homeReducer from './homeReducer';

const appReducer = combineReducers({
  homeReducer: homeReducer,
});

const mainReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: any,
) => {
  switch (action.type) {
    case 'hydrate':
      return action.payload;
    default:
      return appReducer(state, action);
  }
};

export default mainReducer;
