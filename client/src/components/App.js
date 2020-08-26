import React from 'react';
import { Router, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import CoffeeList from './coffee/CoffeeList';
import CoffeeDetails from './coffee/CoffeeDetails';
import CreateCoffee from './coffee/CoffeeCreate';
import CoffeeEdit from './coffee/CoffeeEdit';
import CoffeeDelete from './coffee/CoffeeDelete';
import About from './About';
import Cart from './cart/Cart';
import history from '../history';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className='app'>
			<Router history={history}>
				<div className='app'>
					<NavBar />
					<Route exact path='/' component={Home} />
					<Route exact path='/coffees' component={CoffeeList} />
					<Route path='/coffees/show/:id' component={CoffeeDetails} />
					<Route path='/coffees/create' component={CreateCoffee} />
					<Route path='/coffees/edit/:id' component={CoffeeEdit} />
					<Route
						path='/coffees/delete/:id'
						component={CoffeeDelete}
					/>
					<Route path='/coffees/about' component={About} />
					<Route path='/cart' component={Cart} />
				</div>
			</Router>
		</div>
	);
};

export default App;
