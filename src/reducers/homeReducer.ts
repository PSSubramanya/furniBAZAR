import {combineReducers} from 'redux';
import {CART_PRODUCTS} from '../constants/types';

const initialState = {
  data: [],
};

const cartData = (state = initialState, action: any) => {
  switch (action.type) {
    case CART_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const homeReducer = combineReducers({
  cartData,
});

export default homeReducer;
