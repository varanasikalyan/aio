import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NodeCard from '../node/NodeCard';
import { workflows } from '../../components/common/DataDump';
import { Link } from 'react-router-dom';

class ShowWorkflow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nodes: [],
			workflow: null
		}
		this.deleteNode = this.deleteNode.bind(this);
		this.changeNodeStatus = this.changeNodeStatus.bind(this);		
	}
	
	componentDidMount() {
		if (this.props.user.logged_user !== null) {
			let nodes = [];
			let workflow = null;
			for (let idx = 0; idx < workflows[this.props.user.logged_user].workflows.length; idx++) {
				if (workflows[this.props.user.logged_user].workflows[idx].id === parseInt(this.props.match.params.id)) {
					nodes = workflows[this.props.user.logged_user].workflows[idx].nodes;
					workflow = workflows[this.props.user.logged_user].workflows[idx];
				}
			}
			this.setState({
				nodes: nodes,
				workflow: workflow
			});
		}		
	}

	deleteNode = (id) => {
		var nodes = this.state.nodes;
        for (let idx = 0; idx < nodes.length; idx++) {            
            if (nodes[idx].id === id) {
                nodes.splice(idx, 1);
                idx--;
            }
		}
		this.setState({ nodes: nodes }); 
	}

	changeNodeStatus = (id, newState) => {		
		var nodes = this.state.nodes;
        for (let idx = 0; idx < nodes.length; idx++) {            
            if (nodes[idx].id === id) {
				nodes[idx].status = newState;				              
            }
		}
		this.setState({ nodes: nodes });
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
							<h1>Workflow: " 
								{
									this.state.workflow !== null ? this.state.workflow.name : ""
								}" Nodes.</h1>
								<Link to={'/createnode/' + this.props.match.params.id } style={style} className='nav-item btn btn-post border-width-2 d-lg-inline-block workflow-post-link'>Create Node</Link>
							<div className='row justify-content-center'>
								<div className='col-12'>
									{ 
										this.state.nodes !== [] ?
										this.state.nodes.map((node, index) => {
											return (
												<NodeCard key={ index } node={ node } deleteNode={ this.deleteNode } changeNodeStatus={this.changeNodeStatus} />
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

export default connect(mapStateToProps, null)(ShowWorkflow);