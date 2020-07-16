import React from 'react';
import { Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import CoffeeList from './coffee/CoffeeList';
import CoffeeDetails from './coffee/CoffeeDetails';
import CreateCoffee from './coffee/CoffeeCreate';
import CoffeeEdit from './coffee/CoffeeEdit';
import CoffeeDelete from './coffee/CoffeeDelete';
import TheModal from './Modal';
import About from './About';
import history from '../history';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
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
				</div>
			</Router>
		</div>
	);
};

export default App;
