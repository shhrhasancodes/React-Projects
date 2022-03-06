import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0
    }

    render() { 
         
        return (
            <React.Fragment>
            <span className = {this.getClasses()}>{this.formatCount()}</span>
            <button onClick={this.Increment} className = "btn btn-primary btn-sm m-2">+</button>
            <button onClick={this.Decrement} className = "btn btn-primary btn-sm m-2">-</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getClasses(){
        let classes = "btn m-2 btn-";
         classes += this.state.count === 0 ? 'warning' : "success";
         return classes;
    }

    Increment = () => {
        this.setState({count : this.state.count + 1});
    }

    Decrement = () => {
        this.setState({count : this.state.count - 1});
    }
}
 
export default Counter;