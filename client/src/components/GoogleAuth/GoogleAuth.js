import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import './GoogleAuth.scss';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'165355918127-02lo7eis00oftbrtvmbnasoccc87gbfs.apps.googleusercontent.com',
					fetch_basic_profile: true,
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
			var profile = this.auth.currentUser.get().getBasicProfile();
			this.props.signIn(profile.getId(), profile.getName());
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
			return <button className='btn btn-custom'>Loading</button>;
		} else if (this.props.isSignedIn) {
			return (
				<div className='container'>
					<div className='row flex-nowrap'>
						<div className='col center'>
							<span>Welcome, {this.props.userName}</span>
						</div>
						<div className='col'>
							<button
								className='btn btn-custom'
								onClick={this.onSignOutClick}
							>
								Log Out
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<button className='btn btn-custom' onClick={this.onSignInClick}>
					<FontAwesomeIcon icon={faGoogle} className='icon' />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div className='google-auth'>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
		userName: state.auth.userName,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
