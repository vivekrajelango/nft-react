import { Component } from "react";

export default class ErrorBoundaries extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(err){
        return {
            hasError: true
        }
    }
    componentDidCatch(err, errInfo){
        console.log('xx', err, errInfo);
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}