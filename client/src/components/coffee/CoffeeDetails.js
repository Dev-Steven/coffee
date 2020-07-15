import React from 'react';
import { connect } from 'react-redux';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const CoffeeDetails = () => {
	return (
		<div>
			<h1>Coffee Details</h1>
		</div>
	);
};

export default connect(null)(CoffeeDetails);
