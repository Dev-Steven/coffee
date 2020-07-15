import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { Form, Input, Button, Typography } from 'antd';
const { Text } = Typography;

class CoffeeForm extends Component {
	renderErrors({ error, touched }) {
		if (touched && error) {
			return (
				<div>
					<Text type='danger'>{error}</Text>
				</div>
			);
		}
	}

	renderTextInput = ({ input, label, type, meta }) => {
		// copying all properties into out input tag
		return (
			<div>
				{/* add antd Form somewhere here */}
				<label>{label}: </label>
				<input {...input} type={type} />
				{this.renderErrors(meta)}
			</div>
		);
	};

	onSubmit = formVals => {
		this.props.onSubmit(formVals);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field
					name='name'
					component={this.renderTextInput}
					type='text'
					label='Name'
				/>
				<Field
					name='picture'
					component={this.renderTextInput}
					type='text'
					label='Picture url'
				/>
				<Field
					name='price'
					component={this.renderTextInput}
					type='number'
					label='Price'
				/>
				<Field
					name='description'
					component={this.renderTextInput}
					type='text'
					label='Description'
				/>
				<button>Submit</button>
				<button>
					<Link to='/coffees'>Cancel</Link>
				</button>
			</form>
		);
	}
}

const validate = formVals => {
	const errors = {};

	if (!formVals.name) {
		errors.name = 'You must enter a name';
	}
	if (!formVals.price) {
		errors.price = 'You must enter a price';
	}
	if (!formVals.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({ form: 'coffeeCreate', validate })(CoffeeForm);
