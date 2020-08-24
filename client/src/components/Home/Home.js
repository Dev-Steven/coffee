import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='home-image'>
				<h1>Welcome to 96th Ave. Coffee</h1>
				<div className='shop-btn'>
					<Link to='/coffees'>
						<h3>Shop</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
