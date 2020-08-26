import coffees from '../apis/coffees';
import { ADD_TO_CART } from '../actions/types';
import { getCoffee } from '../actions/index';

export default async (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			console.log('In cartReducer');
			// first search the coffees to find the specific coffee - addedItem
			let addedCoffee = await coffees.get(`/coffees?id=${action.id}`);
			// check if item id exists in added items
			let existedItem = await coffees.get(`/cart?id=${action.id}`);
			// let existedItem = addedItems.find(item => action.id === item.id);
			console.log(addedCoffee.data);
			console.log(existedItem.data);
			// if it does, update quantity and total price
			if (existedItem.data.length > 0) {
				console.log(state);
				addedCoffee.quantity += 1;
				// return {
				//     ...state, total:
				// }
			}
		// otherwise, add new item to added items where quntity = 1 and add to total price
		default:
			return state;
	}
};
