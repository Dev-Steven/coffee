import { ADD_TO_CART } from './types';
import coffees from '../apis/coffees';
import _ from 'lodash';

export const addToCart = id => async dispatch => {
	const responseCart = await coffees.get('/cart');
	const cart = responseCart.data;

	const responseCoffees = await coffees.get('/coffees');
	const selectedCoffee = responseCoffees.data.find(
		coffee => coffee.id === id
	);

	let itemExist = cart.items.find(item => item.id === id);

	let newVals = {};

	if (itemExist) {
		// item already in cart...
		// increase quantity property by one
		itemExist.quantity += 1;
		// increase total
		let newTotal = itemExist.price + cart.total;

		newVals = { itemExist, total: newTotal };
	} else {
		// add item to cart...
		// deep copy to add new property quantity
		let coffeeToAdd = _.cloneDeep(selectedCoffee);
		// create new quantity property
		coffeeToAdd.quantity = 1;
		// add to total
		let newTotal = coffeeToAdd.price + cart.total;

		newVals = { coffeeToAdd, total: newTotal };
	}

	// apparently with json-server you can only access top level properties
	// stopping shopping cart feature.
	const response = await coffees.post('/cart.items', { ...newVals });

	console.log('hello?', response.data);

	dispatch({
		type: ADD_TO_CART,
		payload: response.data,
	});
};
