import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import GoogleAuth from '../GoogleAuth/GoogleAuth';
import './NavBar.scss';

class NavBar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-md navbar-custom'>
				<Link className='navbar-brand mb-0 h1' to='/'>
					96th Ave. Coffee
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/coffees'>
								Coffee
							</Link>
						</li>
						<li className='nav-item '>
							<Link className='nav-link' to='/coffees/about'>
								About
							</Link>
						</li>
					</ul>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<GoogleAuth />
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/cart'>
								<FontAwesomeIcon icon={faShoppingCart} />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
