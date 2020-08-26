import { ADD_TO_CART } from './types';
import coffees from '../apis/coffees';

export const addToCart = id => async dispatch => {
	const response = await coffees.get('/cart');
	const responseData = response.data;
	dispatch({ type: ADD_TO_CART, payload: { id, responseData } });
};
