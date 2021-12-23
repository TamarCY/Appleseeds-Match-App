import React from "react";


class Items extends React.Component {
    render() {
        if (!this.props.data) {return <div> </div>}
        return (
            <>
            <img src={this.props.data.image} alt=""/>
            <h2>{this.props.data.description}</h2>
            </>
        )
    }

}



export default Items
