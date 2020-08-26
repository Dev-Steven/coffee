import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoffees, getCoffee } from '../../actions';
import { addToCart } from '../../actions/cartActions';

import { Button, Affix } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class CoffeeList extends Component {
	componentDidMount() {
		this.props.getCoffees();
	}

	handleAddToCart = id => {
		this.props.addToCart(id);
	};

	displayCoffees() {
		return this.props.coffee.map(coffee => {
			return (
				<div className='col' key={coffee.id}>
					<div className='card'>
						<img
							src={coffee.picture}
							className='card-img-top'
							alt={coffee.name}
							style={{ width: 245, height: 200 }}
						/>
						<div className='card-body'>
							<h5 className='card-title'>{coffee.name}</h5>
							<p className='card-text'>{`$${coffee.price} - ${coffee.description}`}</p>
							<Link
								to={`/coffees/delete/${coffee.id}`}
								className='btn btn-primary'
							>
								More Info
							</Link>
							<button
								onClick={() => this.handleAddToCart(coffee.id)}
								className='btn btn-primary'
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			);
		});
	}

	renderCreateButton() {
		if (this.props.isSignedIn) {
			return (
				<Affix offsetTop={75}>
					<Button
						shape='circle'
						icon={<PlusOutlined />}
						size='large'
						title='Add new coffee'
					/>
				</Affix>
			);
		}
		return <div></div>;
	}

	render() {
		return (
			<div style={{ padding: '10px' }}>
				{/* <Link to='/coffees/create' style={{ float: 'left' }}>
					{this.renderCreateButton()}
				</Link> */}
				<div
					className='home-content container'
					style={{ textAlign: 'center' }}
				>
					<div className='row'>{this.displayCoffees()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
		currentUser: state.auth.userId,
		coffee: Object.values(state.coffee),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCoffees: () => {
			dispatch(getCoffees());
		},
		addToCart: id => {
			dispatch(addToCart(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeList);
