import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DefaultDisplay } from '../common/Helper';
import { states } from '../../components/common/DataDump';

export class NodeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: states.PENDING
        }
        this.handleStatus = this.handleStatus.bind(this);
    }

    componentDidMount() {
        this.setState({
            status: this.props.node.status
        });
    }

    handleStatus = () => {
        let newState = null;
        if (this.state.status === states.PENDING) {
            newState = states.INPROGRESS;	
        } else if (this.state.status === states.INPROGRESS) {
            newState = states.COMPLETED;	
        }
        else {
            newState = states.PENDING;	
        }
        this.props.changeNodeStatus(this.props.node.id, newState);        
        this.setState({
            status: newState
        });
    }

    render() {
        const url = '/node/' + this.props.node.id;
        const style = {             
            paddingTop: "-20px"
        }
        let renderButton = "";
        if (this.state.status === states.PENDING) {
            renderButton = <button type="button" style={ style } onClick={ this.handleStatus } className="btn bg-secondary btn-sm inc-btn" id="status-btn"><i className="fa fa-check"></i></button>;
        }
        else if (this.state.status === states.INPROGRESS) {
            renderButton = <button type="button" style={ style } onClick={ this.handleStatus } className="btn bg-primary btn-sm inc-btn" id="status-btn"><i className="fa fa-check"></i></button>;
        }
        else {
            renderButton = <button type="button" style={ style } onClick={ this.handleStatus } className="btn bg-success btn-sm inc-btn" id="status-btn"><i className="fa fa-check"></i></button>;
        }
        return (                        
            <div className='container-fluid workflow-column workflow-card'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-10 col-xl-11'>
                        <Link to={ url }>
                            <h4 className="workflow-header">{ DefaultDisplay(this.props.node.name, 'Undisclosed workflow') }</h4>
                        </Link>
                    </div>
                    <div className='col-sm-8 col-md-2 col-xl-1'>
                        <button type="button" style={ style } onClick={ () => this.props.deleteNode(this.props.node.id) }  className="btn bg-danger btn-sm inc-btn" id="delete-btn"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-sm-12 col-lg-10 col-xl-11'>
                        <strong className='workflow-header'>{ this.props.node.description }</strong>
                    </div>                    
                </div>                
                <br/>
                <div className='row'>
                    <div className='col-6'>
                        <strong>{ this.props.node.status }</strong>
                    </div>
                    <div className='col-6'>
                        {
                            renderButton                            
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

export default connect(mapStateToProps, null)(NodeCard);