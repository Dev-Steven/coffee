import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

import { Menu } from 'antd';

class NavBar extends Component {
	render() {
		return (
			<div>
				<Menu mode='horizontal'>
					<Menu.Item>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/coffees/show'>Coffee</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/coffees/about'>About</Link>
					</Menu.Item>
					<Menu.Item style={{ float: 'right' }}>
						<GoogleAuth />
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default NavBar;
