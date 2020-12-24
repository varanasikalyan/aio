import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Header = (props) => {
	let userOptions;
	
	if (props.user.logged_user !== null)
		userOptions = <SignedInLinks />	
	else
		userOptions = <SignedOutLinks />	
    return (
      <Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top banner-gradient-royal-bottom'>
			<Link to='/' className='site-logo'>
				<img
					src={require('../../../static/images/logo/flowchart.png')}
					alt='WORKFLOW_ADMIN_PORTAL'
					className='logo'
				/> 
				<span className='app-name'>FLOWAPP.</span>
			</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse main-menu' id='navbarSupportedContent'>				
				<ul className='navbar-nav mr-auto main-header-ul' />					
				<ul className='navbar-nav'>					
					{ userOptions }
				</ul>									
			</div>			
		</nav>        
      </Fragment>
    );
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(Header);