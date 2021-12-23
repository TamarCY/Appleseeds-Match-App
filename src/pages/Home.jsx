import React from "react";
import Counter from "../components/Counter";
import Items from "../components/Items";
import Done from "../components/Done";

class Home extends React.Component {
    state = {
        items: [],
        Like: 0,
        Dislike: 0,
        clicks: 0,
        displayGallery: true,

    }
    getData = () => {
        this.setState({
            items: [
                {
                    image: "https://picsum.photos/id/1/200/300",
                    description: "first",
                    id: 1
                },
                {
                    image: "https://picsum.photos/id/2/200/300",
                    description: "second",
                    id: 2
                },
                {
                    image: "https://picsum.photos/id/3/200/300",
                    description: "third",
                    id: 3
                }
            ]
        })
    }

    clickHandler = (e) => {
        this.setState((prevState) => {
            return {
                [e.target.innerText]: prevState[e.target.innerText] + 1,
                clicks: prevState.clicks + 1,
            }

        }, () => {
            if (this.state.items.length < (this.state.clicks + 1)) {
                this.setState({ displayGallery: false })
            }
        })

    }

    displayGallery = () => {

        return this.state.displayGallery ? 
        <Items data={this.state.items[this.state.clicks]} />
         : <Done />

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <>
                <Counter type="Dislike" counterData={this.state.Dislike} clickHandler={this.clickHandler} />
                {this.displayGallery()}
                <Counter type="Like" counterData={this.state.Like} clickHandler={this.clickHandler} />
            </>

        )
    }
}



export default Home

