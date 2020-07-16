import coffees from '../apis/coffees';
import history from '../history';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_COFFEE,
	GET_COFFEES,
	GET_COFFEE,
	EDIT_COFFEE,
	DELETE_COFFEE,
} from './types';

export const signIn = (userId, userName) => {
	return {
		type: SIGN_IN,
		payload: { userId, userName },
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createCoffee = formValues => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const response = await coffees.post('/coffees', { ...formValues, userId });

	dispatch({ type: CREATE_COFFEE, payload: response.data });
	history.push('/coffees');
};

export const getCoffees = () => async dispatch => {
	const response = await coffees.get('/coffees');

	dispatch({ type: GET_COFFEES, payload: response.data });
};

export const getCoffee = id => async dispatch => {
	const response = await coffees.get(`/coffees/${id}`);

	dispatch({ type: GET_COFFEE, payload: response.data });
};

export const editCoffee = (id, formValues) => async dispatch => {
	// .put will overrides the entire original data .patch partial update
	const response = await coffees.patch(`/coffees/${id}`, formValues);

	dispatch({ type: EDIT_COFFEE, payload: response.data });
	history.push('/coffees');
};

export const deleteCoffee = id => async dispatch => {
	await coffees.delete(`/coffees/${id}`);

	dispatch({ type: DELETE_COFFEE, payload: id });
	history.push('/coffees');
};
