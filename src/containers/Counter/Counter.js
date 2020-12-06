import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store result</button>
                <ul>
                    {
                        this.props.results.map(({ value, id }) =>
                            <li onClick={() => this.props.deleteResult(id)} key={id}>{value}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
        storeResult: result => dispatch({ type: actionTypes.STORE_RESULT, payload: { result } }),
        deleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, payload: { id } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);