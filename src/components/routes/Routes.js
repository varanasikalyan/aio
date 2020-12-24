import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../common/notfound/NotFound';
import SignIn from '../auth/SignIn';
import SignOut from '../auth/SignOut';
import ForgotPassword from '../auth/ForgotPassword';
import WorkflowHome from '../workflow/WorkflowHome';
import ShowWorkflow from '../workflow/ShowWorkflow';
import CreateWorkflow from '../workflow/CreateWorkflow';
import CreateNode from '../node/CreateNode';

import Help from '../common/Help';

const Routes = () => (
	<div className='nav-content'>
		<Switch>
			<Route exact path='/' component={ SignIn } />
			<Route exact path='/signin' component={ SignIn } />
			<Route exact path='/home' component={ WorkflowHome } />
			<Route exact path='/forgot' component={ ForgotPassword } />
			<Route exact path='/createworkflow' component={ CreateWorkflow } />
			<Route exact path='/createnode/:id' component={ CreateNode } />
			<Route exact path='/workflow/:id' component={ ShowWorkflow } />			
			<Route exact path='/signout' component={ SignOut } />
			<Route exact path='/help' component={ Help } />
			<Route path='*' component={ NotFound } />
		</Switch>
	</div>
);

export default Routes;
