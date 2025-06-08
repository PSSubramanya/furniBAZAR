import {CART_PRODUCTS} from '../constants/types';

export function addToCart(product: object) {
  return {
    type: CART_PRODUCTS,
    payload: product,
  };
}
