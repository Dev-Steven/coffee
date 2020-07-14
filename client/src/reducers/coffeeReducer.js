import _ from 'lodash';
import {
	CREATE_COFFEE,
	GET_COFFEES,
	GET_COFFEE,
	EDIT_COFFEE,
	DELETE_COFFEE,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_COFFEE:
			return { ...state, [action.payload.id]: action.payload };
		case GET_COFFEE:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_COFFEE:
			return { ...state, [action.payload.id]: action.payload };
		case GET_COFFEES:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case DELETE_COFFEE:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
