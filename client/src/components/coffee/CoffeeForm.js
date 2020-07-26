import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';

import { Button, Typography } from 'antd';
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
		console.log({ formVals });
		this.props.onSubmit(formVals);
	};

	onCancel = () => {
		history.push('/coffees');
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
				<Button htmlType='submit'>Submit</Button>
				<Button onClick={this.onCancel}>Cancel</Button>
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
