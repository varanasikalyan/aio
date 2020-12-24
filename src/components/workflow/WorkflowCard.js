import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DefaultDisplay } from '../common/Helper';
import { states } from '../../components/common/DataDump';

export class WorkflowCard extends Component {            
    render() {
        const url = '/workflow/' + this.props.workflow.id;
        const style = {             
            paddingTop: "-20px"
        }
        return (                        
            <div className='container-fluid workflow-column workflow-card'>
                <div className='row'>
                    <div className='col-sm-8 col-lg-10 col-xl-11'>
                        <Link to={ url }>
                            <h4 className="workflow-header">{ DefaultDisplay(this.props.workflow.name, 'Undisclosed workflow') }</h4>
                        </Link>
                    </div>
                    <div className='col-sm-8 col-md-2 col-xl-1'>
                        <button type="button" style={ style } onClick={ () => this.props.deleteWorkflow(this.props.workflow.id) }  className="btn bg-danger btn-sm inc-btn" id="delete-btn"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <br/>
                <br/>
                <div className='row'>
                    <div className='col-6'>
                        <strong>{ this.props.workflow.status }</strong>
                    </div>
                    <div className='col-6'>
                        {
                            this.props.workflow.status === states.PENDING ?
                            <button type="button" style={ style } className="btn bg-secondary btn-sm inc-btn" id="status-btn"><i className="fa fa-check"></i></button>
                            :
                            <button type="button" style={ style } className="btn bg-success btn-sm inc-btn" id="status-btn"><i className="fa fa-check"></i></button>
                        }
                    </div>
                </div>
            </div>            
        )
    }
}

const mapStateToProps = (state, props) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(WorkflowCard);