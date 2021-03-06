import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import { isEmail, isMobilePhone } from 'validator';
import { connect } from 'react-redux';
import { authenticateUser, resetUserStatus } from '../../store/actions/userActions';
import { NotificationsTimeOut } from '../common/Constants';

class SignIn extends Component {	
    constructor() {
		super();		
		this.state = {
			loginId: '',						
			password: ''			
		}		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		if(this.props.user.status === 'AUTHENTICATE_USER_ERROR') {
			notify.show(this.props.user.response.message, 'error', NotificationsTimeOut, 'red');
			this.props.resetUserStatus();
			this.setState({				
				loginId: '',
				password: ''				
			});
		}
	}		
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value			
		});		
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let errors = '';
		if (!isEmail(this.state.loginId) && !isMobilePhone(this.state.loginId, 'en-IN'))
			errors = 'Please provide a valid Email or Mobile';

        if(errors === '')
			this.props.authenticateUser(this.state);
        else
            notify.show(errors, 'error', NotificationsTimeOut, 'red');
	}
    render() {				
		if(this.props.user.logged_user !== null) {
			if (this.props.location.state !== undefined && this.props.location.state.needsBack)
				this.props.history.goBack(this.props.history.length - 1);
			else
				return <Redirect to='/home' />;
		}
		return (
			<Fragment>
				<div className='container auth-container site-content'>					
					<div className='wrap-login-style'>
						<form method='POST' action='' onSubmit={this.handleSubmit} className='form-signin'>
							<fieldset className='form-group'>
								{ 
									this.props.user.loading ?
									(
										<Fragment>
											<img className='mb-3' src={require('../../static/images/loading/loading.gif')} alt='Login' width='60' height='60'/>
											<h1 className='border-bottom mb-4 h3 mb-3 font-weight-normal'>Signing in</h1>
										</Fragment>
									)
									:
									(
										<Fragment>
											<img className='mb-3' src={require('../../static/images/login.png')} alt='Login' width='60' height='60'/>
											<h1 className='border-bottom mb-4 h3 mb-3 font-weight-normal'>Please sign in</h1>
										</Fragment>
									)
								}									
								<div className='form-group'>
									<label className='form-control-label' htmlFor='loginId'>Email</label>
									<input className='form-control form-control-sm' id='loginId' name='loginId' required='' type='text' autoComplete='email-mobile' value={this.state.loginId} onChange={this.handleChange}/>
								</div>
								<div className='form-group'>
									<label className='form-control-label' htmlFor='password'>Password</label>
									<input className='form-control form-control-sm' id='password' name='password' required='' type='password' autoComplete='current-password' value={this.state.password} onChange={this.handleChange}/>
								</div>								
							</fieldset>
							<div className='form-group'>
								<input className='btn btn-md btn-primary btn-block' id='submit' name='submit' type='submit' value='Sign In'/>
							</div>
							<Link to='/forgot' id='forgot'>Forgot your password?</Link>
							<br/>							
						</form>
					</div>					
				</div>					
			</Fragment>
		)			
    }
}

const mapStateToProps = (state, props) => {
	return {
		user: state.user,
		common: state.common	
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
		authenticateUser: (user) => dispatch(authenticateUser(user)),
		resetUserStatus: () => dispatch(resetUserStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
