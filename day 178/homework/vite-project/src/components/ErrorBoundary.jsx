import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error){
        return {hasError: true, error}
    }
    componentDidCatch(error, errorInfo){
        console.log("Sending error data to API:");
        console.log({
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
        });
    }
    handleRetry = () => {
        this.setState({ hasError: false })
    }
    render(){
        if(this.state.hasError){
            let errorMessage;
            if(this.state.error instanceof TypeError){
                errorMessage = 'type error occurred'
            }else if(this.state.error instanceof ReferenceError){
                errorMessage = 'reference error occurred'
            }else{
                errorMessage = 'unknown error occurred'
            }
            return(
                <div>
                    <p>{errorMessage}</p>
                    <button onClick={this.handleRetry}>RETRY</button>
                </div>
            )
        }else{
            return(
                this.props.children
            )
        }
    }
}
export default ErrorBoundary