import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { states, workflows } from '../../components/common/DataDump';

class CreateNode extends Component {
	constructor(props) {
		super(props);
		this.api = null;
		this.state = {
            title: "",
            description: ""
		}
	}
    
	handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.user.logged_user !== null) {			
			for (let idx = 0; idx < workflows[this.props.user.logged_user].workflows.length; idx++) {
				if (workflows[this.props.user.logged_user].workflows[idx].id === parseInt(this.props.match.params.id)) {
                    var latestId = 1;
                    if (workflows[this.props.user.logged_user].workflows[idx].nodes.length > 0) {
                        latestId = workflows[this.props.user.logged_user].workflows[idx].nodes[workflows[this.props.user.logged_user].workflows[idx].nodes.length - 1].id + 1;
                    }
                    workflows[this.props.user.logged_user].workflows[idx].nodes.push({id: latestId, name: this.state.title, description: this.state.description, status: states.PENDING})
                    break;
				}
            }
            this.props.history.push("/workflow/" + this.props.match.params.id);
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
									<h1 className='font-weight-bold'>Create Node</h1>									
								</span>
							</div>
							<div className='row'>						
								<div className='col-12 form-group'>
									<label className='text-black' htmlFor='title'>Node title</label>
									<input type='text' id='title' name='title' className='form-control' value={this.state.title} onChange={this.handleChange}/>
								</div>								
							</div>
                            <div className='row'>						
								<div className='col-12 form-group'>
									<label className='text-black' htmlFor='title'>Node Description</label>
									<textarea name='description' id='description' cols='30' rows='4' className='form-control'
										placeholder='Node description...' value={this.state.description} onChange={this.handleChange}></textarea>
								</div>								
							</div>
                            <div className='col-lg-6 col-xs-12 form-group post-workflow-button'>
								<span className='post-workflow-span'><input type='submit' value='Create Node' className='btn btn-post-page btn-md text-white workflow-post-button' /></span>            						
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

export default connect(mapStateToProps, null)(CreateNode);