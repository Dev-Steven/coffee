import coffees from '../apis/coffees';
import { ADD_TO_CART } from '../actions/types';
import _ from 'lodash';

export default async (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// first search the coffees to find the specific coffee - addedItem
			let selectedCoffee = await coffees.get(
				`/coffees?id=${action.payload.id}`
			);
			console.log('selectedCoffee: ', selectedCoffee.data[0]);

			let cartArray = await coffees.get(`/cart?id=${action.payload.id}`);

			let coffeeToAdd = _.cloneDeep(selectedCoffee.data[0]);
			// check if item id exists in added items

			let itemInCart = cartArray.data[0];

			// if item in cart, update quantity and total price
			if (itemInCart && itemInCart.id === action.payload.id) {
				console.log('item in cart');
				// take state (empty obj) and copy everything from responseData into state
				// then add the addedCoffee into there
			}
			// otherwise, add new item to cart
			else {
				console.log('item not in cart');

				// create quantity property where quantity = 1
				coffeeToAdd.quantity = 1;
				console.log('coffeeToAdd: ', coffeeToAdd);

				// add to total price
				let newTotal =
					coffeeToAdd.price + action.payload.responseData[0].total;
				console.log('newTotal: ', newTotal);

				// update db.json file
				// total: newTotal
				// add new object coffeeToAdd
			}
		default:
			return state;
	}
};
