import React from 'react';
import { Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import CoffeeList from './coffee/CoffeeList';
import CreateCoffee from './coffee/CoffeeCreate';
import CoffeeEdit from './coffee/CoffeeEdit';
import CoffeeDelete from './coffee/CoffeeDelete';
import About from './About';
import history from '../history';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<NavBar />
					<Route exact path='/' component={Home} />
					<Route path='/coffees/show' component={CoffeeList} />
					<Route path='/coffees/create' component={CreateCoffee} />
					<Route path='/coffees/edit' component={CoffeeEdit} />
					<Route path='/coffees/delete' component={CoffeeDelete} />
					<Route path='/coffees/about' component={About} />
				</div>
			</Router>
		</div>
	);
};

export default App;
