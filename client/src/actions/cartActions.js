import { ADD_TO_CART } from './types';
import coffees from '../apis/coffees';

export const addToCart = id => {
	console.log(`In action creater addToCart id: ${id}`);
	// const response = await coffees.get('/cart');
	// console.log(response.data);
	return { type: ADD_TO_CART, id };
};
