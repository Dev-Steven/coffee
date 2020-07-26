import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoffees } from '../../actions';

import { Card, Col, Row, Button, Affix } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;

class CoffeeList extends Component {
	componentDidMount() {
		this.props.getCoffees();
	}

	displayCoffees() {
		return this.props.coffee.map(coffee => {
			return (
				<Col key={coffee.id} span={12} style={{ textAlign: 'center' }}>
					<Card
						className='gray-back'
						hoverable
						style={{ width: 240, display: 'inline-block' }}
						cover={
							<img
								style={{
									width: 240,
									height: 200,
								}}
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
							<Row style={{ marginTop: '5%' }}>
								<Col span={12}>
									<Link to={`/coffees/edit/${coffee.id}`}>
										<Button icon={<EditOutlined />}>
											Edit
										</Button>
									</Link>
								</Col>
								<Col span={12}>
									<Link to={`/coffees/delete/${coffee.id}`}>
										<Button
											danger
											icon={<DeleteOutlined />}
										>
											Delete
										</Button>
									</Link>
								</Col>
							</Row>
						) : null}
					</Card>
				</Col>
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
				<Link to='/coffees/create' style={{ float: 'left' }}>
					{this.renderCreateButton()}
				</Link>
				<div className='home-content' style={{ textAlign: 'center' }}>
					<div style={{ display: 'inline-block' }}>
						<Row gutter={[8, 8]}>{this.displayCoffees()}</Row>
					</div>
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

export default connect(mapStateToProps, { getCoffees })(CoffeeList);
