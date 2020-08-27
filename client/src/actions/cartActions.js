import { ADD_TO_CART } from './types';
import coffees from '../apis/coffees';

export const addToCart = id => async dispatch => {
	const responseCart = await coffees.get('/cart');
	const cart = responseCart.data;

	let responseSelectedCoffee = await coffees.get(`/coffees?id=${id}`);
	let selectedCoffee = responseSelectedCoffee.data[0];

	let responseItemExist = await coffees.get(`/cart?id=${id}`);
	let itemExist = responseItemExist.data[0];

	dispatch({
		type: ADD_TO_CART,
		payload: { id, cart, selectedCoffee, itemExist },
	});
};
