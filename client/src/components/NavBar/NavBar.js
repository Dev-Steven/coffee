import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';
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
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;

{
	/* <Affix offsetTop={1}>
				<Menu mode='horizontal'>
					<Menu.Item>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/coffees'>Coffee</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/coffees/about'>About</Link>
					</Menu.Item>
					<Menu.Item style={{ float: 'right' }}>
						<GoogleAuth />
					</Menu.Item>
				</Menu>
			</Affix> */
}
