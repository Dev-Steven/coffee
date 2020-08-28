import coffees from '../apis/coffees';
import { ADD_TO_CART } from '../actions/types';
import _ from 'lodash';

export default async (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			console.log('cartReducer');
			return {
				...state,
				[action.payload.coffeeToAdd.id]: action.payload,
			};

		default:
			return state;
	}
};
