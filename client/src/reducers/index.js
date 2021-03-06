import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import coffeeReducer from './coffeeReducer';
import cartReducer from './cartReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	coffee: coffeeReducer,
	cart: cartReducer,
});
