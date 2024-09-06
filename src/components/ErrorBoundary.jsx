import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error) {
        console.log(error);
        this.setState({
            hasError: true
        })
    }
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong <br />Take a look to browser console for more detail</p>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {

};

export default ErrorBoundary;