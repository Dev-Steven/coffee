import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoffee, deleteCoffee } from '../../actions';
import TheModal from '../Modal';
import CoffeeList from './CoffeeList';
import history from '../../history';

import { LoadingOutlined } from '@ant-design/icons';

class CoffeeDelete extends Component {
	componentDidMount() {
		this.props.getCoffee(this.props.match.params.id);
		console.log(this.props);
	}

	deleteCoffee = () => {
		this.props.deleteCoffee(this.props.match.params.id);
	};

	cancel = () => {
		history.push('/coffees');
	};

	render() {
		if (!this.props.coffeeToDelete) {
			return (
				<div>
					<LoadingOutlined />
				</div>
			);
		}
		return (
			<div>
				<CoffeeList />
				<TheModal
					title='Delete Coffee?'
					coffee={this.props.coffeeToDelete}
					okText='Delete'
					handleOk={this.deleteCoffee}
					handleCancel={this.cancel}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		coffeeToDelete: state.coffee[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { getCoffee, deleteCoffee })(
	CoffeeDelete
);
