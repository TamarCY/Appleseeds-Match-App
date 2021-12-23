import React from "react";


class Counter extends React.Component {
    render(){
        return (
            <div>
            <div>{this.props.type}</div>
            <div>{this.props.counterData}</div>
            <button onClick={this.props.clickHandler}>{this.props.type}</button>
            </div>
        )
    }
}


export default Counter
