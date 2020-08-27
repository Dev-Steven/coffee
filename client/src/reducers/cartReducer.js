import coffees from '../apis/coffees';
import { ADD_TO_CART } from '../actions/types';
import _ from 'lodash';

export default async (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			let coffeeToAdd = _.cloneDeep(action.payload.selectedCoffee);

			// if item in cart, update quantity and total price
			// action.payload.itemExist &&
			if (action.payload.itemExist.id === action.payload.id) {
				console.log('item in cart');

				coffeeToAdd.quantity += 1;
				let newTotal = coffeeToAdd.price + action.payload.cart[0].total;

				return {
					...state,
					total: newTotal,
				};
			} else {
				coffeeToAdd.quantity = 1;
				let newTotal = coffeeToAdd.price + action.payload.cart[0].total;

				// cant figure out how to update cart
				return {
					...state,
					total: newTotal,
					[action.payload.id]: { coffeeToAdd },
				};
			}
		default:
			return state;
	}
};
