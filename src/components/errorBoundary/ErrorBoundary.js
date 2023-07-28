import { Component } from "react";
import ErrorMessange from '../errorMessange/ErrorMessange';

class ErrorBoundary extends Component{

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    render() {
        if (this.state.error) {
            return <ErrorMessange/>
        }

        return this.props.children;
        
    }

}

export default ErrorBoundary;