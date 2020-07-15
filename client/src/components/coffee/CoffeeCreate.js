import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCoffee } from '../../actions/index';

import CoffeeForm from './CoffeeForm';

class CreateCoffee extends Component {
	onSubmit = formVals => {
		this.props.createCoffee(formVals);
	};

	render() {
		return (
			<div>
				<CoffeeForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createCoffee })(CreateCoffee);
