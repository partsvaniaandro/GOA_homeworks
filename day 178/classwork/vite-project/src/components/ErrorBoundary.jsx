import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(){
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo){
        console.log(error)
        console.log(errorInfo)
    }
    render(){
        if(this.state.hasError){
            return(
                <p>ERROR</p>
            )
        }else{
            return(
                this.props.children
            )
        }
    }
}
export default ErrorBoundary