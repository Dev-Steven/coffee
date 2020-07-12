import React, { Component } from 'react';

import { Form, Input, Button } from 'antd';

class CoffeeForm extends Component {
	render() {
		return (
			<div>
				<Form>
					<Form.Item label='Name'>
						<Input placeholder='Enter coffee name' />
					</Form.Item>
					<Form.Item label='Price'>
						<Input placeholder='Price of the coffee' />
					</Form.Item>
					<Form.Item label='Description'>
						<Input placeholder='description of the coffee' />
					</Form.Item>
					<Form.Item>
						<Button type='primary'>Add Coffee</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default CoffeeForm;
