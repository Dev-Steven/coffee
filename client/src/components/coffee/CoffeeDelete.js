import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoffee, deleteCoffee } from '../../actions';

import { Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

class CoffeeDelete extends Component {
	componentDidMount() {
		this.props.getCoffee(this.props.match.params.id);
		console.log(this.props);
	}

	delete = () => {
		this.props.deleteCoffee(this.props.match.params.id);
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
				Are you sure you want to delete {this.props.coffee.name}?
				<Button onClick={this.delete}>Delete</Button>
				<Button>
					<Link to='/coffees'>Cancel</Link>
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		coffee: state.coffee[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { getCoffee, deleteCoffee })(
	CoffeeDelete
);
