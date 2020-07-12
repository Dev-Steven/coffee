import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCoffee } from '../../actions';

import { Card, Col, Row, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Meta } = Card;

class CoffeeList extends Component {
	displayCoffees() {
		return this.props.coffees.map(coffee => {
			return (
				<div key={coffee.name}>
					<Col span={8}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={
								<img
									style={{ width: 240, height: 200 }}
									alt={coffee.name}
									src='https://media3.s-nbcnews.com/i/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.jpg'
								/>
							}
						>
							<Meta
								title={coffee.name}
								description={`$${coffee.price}`}
							/>
						</Card>
					</Col>

					{/*
					<button onClick={() => this.props.selectCoffee(coffee)}>
						Select
					</button> */}
				</div>
			);
		});
	}

	renderCreateButton() {
		if (this.props.isSignedIn) {
			return (
				<Button shape='circle' icon={<PlusOutlined />} size='large' />
			);
		}
		return <div></div>;
	}

	render() {
		return (
			<div className='site-card-wrapper'>
				<Row gutter={16}>{this.displayCoffees()}</Row>
				<Link to='/coffees/create'>{this.renderCreateButton()}</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
		coffees: state.coffees,
	};
};

export default connect(mapStateToProps, { selectCoffee })(CoffeeList);
