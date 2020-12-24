import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import WorkflowCard from './WorkflowCard';
import { workflows } from '../../components/common/DataDump';
import { Link } from 'react-router-dom';

class WorkflowHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workflows: []
		}
		this.deleteWorkflow = this.deleteWorkflow.bind(this);
	}
	
	componentDidMount() {
		if (this.props.user.logged_user !== null) {
			this.setState({
				workflows: workflows[this.props.user.logged_user].workflows
			});
		}		
	}

	deleteWorkflow = (id) => {
		var workflows = this.state.workflows;
        for (let idx = 0; idx < workflows.length; idx++) {            
            if (workflows[idx].id === id) {
                workflows.splice(idx, 1);
                idx--;
            }
		}
		this.setState({ workflows: workflows }); 
	}

    render() {
		const style = { 
			float: "right"
		}
		return (
			<Fragment>
				<div className='container-fluid site-content'>
					{
						this.props.user.logged_user !== null ?
						<Fragment>
							<h1>My Workflows.</h1>
							<Link to='/createworkflow' style={style} className='nav-item btn btn-post border-width-2 d-lg-inline-block workflow-post-link'>Create Workflow</Link>
							<div className='row justify-content-center'>
								<div className='col-12'>
									{ 
										this.state.workflows !== [] ?
										this.state.workflows.map((workflow, index) => {
											return (
												<WorkflowCard key={ index } workflow={ workflow } deleteWorkflow={ this.deleteWorkflow }/>
											);
										})								
										:
										<div>
											<br/>
											<br/>
											No Workflows created.
										</div>
										
									}
								</div>								
							</div>
						</Fragment>
						:
						<h1>Welcome to Workflows application.</h1>
					}									
				</div>
			</Fragment>
		)
    }
}

const mapStateToProps = (state, props) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(WorkflowHome);