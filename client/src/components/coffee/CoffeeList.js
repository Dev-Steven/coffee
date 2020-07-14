import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoffees } from '../../actions';

import { Card, Col, Row, Button } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
const { Meta } = Card;

class CoffeeList extends Component {
	componentDidMount() {
		this.props.getCoffees();
	}

	displayCoffees() {
		return this.props.coffee.map(coffee => {
			return (
				<div key={coffee.id}>
					<Col span={8}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={
								<img
									style={{ width: 240, height: 200 }}
									alt={`Pic of ${coffee.name} not available`}
									src={coffee.picture}
								/>
							}
						>
							<Meta
								title={coffee.name}
								description={`$${coffee.price} - ${coffee.description}`}
							/>
							{this.props.currentUser === coffee.userId ? (
								<Link to='/coffees/edit'>
									<Button icon={<EditOutlined />}>
										Edit
									</Button>
								</Link>
							) : null}
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
		currentUser: state.auth.userId,
		coffee: Object.values(state.coffee),
	};
};

export default connect(mapStateToProps, { getCoffees })(CoffeeList);
