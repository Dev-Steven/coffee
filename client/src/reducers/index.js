import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import coffeeReducer from './coffeeReducer';

const coffeesReducer = () => {
	return [
		{ name: 'Americano', price: 3 },
		{ name: 'Esspresso', price: 4 },
		{ name: 'Daily Brew', price: 2 },
		{ name: 'Latte', price: 5 },
	];
};

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	coffees: coffeesReducer,
	selectedCoffee: coffeeReducer,
});
