import React from 'react';
import { connect } from 'react-redux';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const CoffeeDetails = ({ coffee }) => {
	if (coffee === null) {
		return <div></div>;
	}
	return (
		<div>
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
				<Meta title={coffee.name} description={`$${coffee.price}`} />
			</Card>
		</div>
	);
};

const mapStateToProps = ({ selectedCoffee }) => {
	return {
		coffee: selectedCoffee,
	};
};

export default connect(mapStateToProps)(CoffeeDetails);
