import { COFFEE_SELECTED } from '../actions/types';

export default (selectedCoffee = null, action) => {
	switch (action.type) {
		case COFFEE_SELECTED:
			return action.payload;
		default:
			return selectedCoffee;
	}
};
