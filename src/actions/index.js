import { SIGN_IN, SIGN_OUT, COFFEE_SELECTED } from './types';

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const selectCoffee = coffee => {
	return {
		type: COFFEE_SELECTED,
		payload: coffee,
	};
};

export const createCoffee = formValues => {
	return {};
};
