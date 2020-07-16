import React, { Component } from 'react';
import _ from 'lodash';
import CoffeeForm from './CoffeeForm';
import { editCoffee, getCoffee } from '../../actions';
import { connect } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

class CoffeeEdit extends Component {
	componentDidMount() {
		// need this because if user jumps straight to this route the appropriate stream will appear
		// need information for the this.props.coffee value
		this.props.getCoffee(this.props.match.params.id);
	}

	onSubmit = formVals => {
		this.props.editCoffee(this.props.match.params.id, formVals);
	};

	render() {
		if (!this.props.coffee) {
			return (
				<div>
					<LoadingOutlined />
				</div>
			);
		}
		return (
			<div>
				Coffee Edit Component
				<CoffeeForm
					onSubmit={this.onSubmit}
					// pick allows us to create a new object with our own chosen properties
					// _.pick(object, [properties we want])
					initialValues={_.pick(
						this.props.coffee,
						'name',
						'picture',
						'price',
						'description'
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// ownProps - allows us to access props within the component
	return { coffee: state.coffee[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editCoffee, getCoffee })(CoffeeEdit);
