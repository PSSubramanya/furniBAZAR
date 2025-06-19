import {CART_PRODUCTS, FAVOURITE_PRODUCTS} from '../constants/types';

export function addToCart(product: object) {
  return {
    type: CART_PRODUCTS,
    payload: product,
  };
}

export function addToFavourite(product: object) {
  return {
    type: FAVOURITE_PRODUCTS,
    payload: product,
  };
}
