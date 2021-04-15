import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import {SetCounterAction,RemoveCounterAction} from '../actions/CountActions';
class ReduxExample extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div>
            <button>SET COUNTER</button>
            <button>REMOVE COUNTER</button>
            <h1>value 0f counter : </h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    counter : state.counter
});

const mapDispatchToProps = dispatch=>({
    setCounter :data=>dispatch(SetCounterAction(data)),
    removeCounter: data => dispatch(RemoveCounterAction(data))
});
export default connect(mapStateToProps,mapDispatchToProps) (ReduxExample);