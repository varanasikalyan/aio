import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { states, workflows } from '../../components/common/DataDump';

class CreateWorkflow extends Component {
	constructor(props) {
		super(props);
		this.api = null;
		this.state = {
			title: ""			
		}
	}
    
	handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.user.logged_user !== null) {
			var latestId = 1;
            if (workflows[this.props.user.logged_user].workflows.length > 0) {
				latestId = workflows[this.props.user.logged_user].workflows[workflows[this.props.user.logged_user].workflows.length - 1].id + 1;
			}
            workflows[this.props.user.logged_user].workflows.push({id: latestId, name: this.state.title, status: states.PENDING, nodes: []});            
            this.props.history.push("/home");
        }        
	};
    
    handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value} );
    }
    
	render() {		
		if (this.props.user.logged_user === null) {
			return (
				<Redirect to='/signin'/>
			);
		}		
		return (
			<Fragment>
				<div className='workflow-create-section site-content' id='next-section'>
					<form action='/workflow' onSubmit={this.handleSubmit} method='POST'>
						<div className='container'>
							<div className='row align-items-center justify-content-center underline'>
								<span>
									<h1 className='font-weight-bold'>Create Workflow</h1>									
								</span>
							</div>
							<div className='row'>						
								<div className='col-12 form-group'>
									<label className='text-black' htmlFor='title'>Workflow title</label>
									<input type='text' id='title' name='title' className='form-control' value={this.state.title} onChange={this.handleChange}/>
								</div>								
							</div>
                            <div className='col-lg-6 col-xs-12 form-group post-workflow-button'>
								<span className='post-workflow-span'><input type='submit' value='Create Workflow' className='btn btn-post-page btn-md text-white workflow-post-button' /></span>            						
							</div>
						</div>							                
					</form>						
				</div>				
			</Fragment>			
		)
	}
}

const mapStateToProps = (state) => {
	return {		
		user: state.user		
	}
}

export default connect(mapStateToProps, null)(CreateWorkflow);