import React, { Component, Fragment } from 'react';

class LoadingCircle extends Component {
    render() {        
        return (
            <Fragment>
                <img
                    src={require('../../../static/images/loading/loading.gif')}
                    alt='LOADING_AUDIO'
                    className='loading'
                />
                <div className='process-text'>{ this.props.process }</div>
            </Fragment>            
        );
    }
}

export default LoadingCircle;