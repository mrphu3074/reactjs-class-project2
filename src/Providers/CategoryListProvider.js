import React from "react";
const {Provider, Consumer} = React.createContext();

export const CategoryConsumer = Consumer;
export class CategoryProvider extends React.Component {
    API = "https://fast-temple-19334.herokuapp.com/api/categories";
    state = {
        loading: true,
        list: []
    }

    getData = () => {
        fetch(this.API)
        .then(res=> res.json())
        .then(res=> {
            this.setState({
                list: res.data
            });
        })
    }

    componentDidMount() {
        this.getData();
    }

    render(){
        return(
            <Provider value = {{state: this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}