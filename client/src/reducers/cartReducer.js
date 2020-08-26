import coffees from '../apis/coffees';
import { ADD_TO_CART } from '../actions/types';

export default async (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// first search the coffees to find the specific coffee - addedItem
			let addedCoffee = await coffees.get(
				`/coffees?id=${action.payload.id}`
			);
			// check if item id exists in added items
			let existedItem = await coffees.get(
				`/cart?id=${action.payload.id}`
			);

			// ** Need to copy the whole object using ... for immutability

			// if it does, update quantity and total price
			if (
				existedItem.data[0] &&
				existedItem.data[0].id === action.payload.id
			) {
				console.log('item exists');
				// take state (empty obj) and copy everything from responseData into state
				// then add the addedCoffee into there
			} else {
				// otherwise, add new item to added items where quntity = 1 and add to total price
				console.log('item not in cart');
			}
		default:
			return state;
	}
};
