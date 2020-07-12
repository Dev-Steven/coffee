import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'165355918127-02lo7eis00oftbrtvmbnasoccc87gbfs.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					// reference to get status of user, sign in/out
					this.auth = window.gapi.auth2.getAuthInstance();
					// get current auth status
					this.onAuthChange(this.auth.isSignedIn.get());
					// update the auth status whenever a change is made
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	// listen method calls onAuthChange with a boolean argument
	// so we dont need this.auth.isSignedIn.get()
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return (
				<Button type='primary' shape='round' loading>
					Loading
				</Button>
			);
		} else if (this.props.isSignedIn) {
			return (
				<Button
					type='primary'
					shape='round'
					onClick={this.onSignOutClick}
				>
					Sign Out
				</Button>
			);
		} else {
			return (
				<Button
					type='primary'
					shape='round'
					icon={<GoogleOutlined />}
					danger
					onClick={this.onSignInClick}
				>
					Sign In with Google
				</Button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);