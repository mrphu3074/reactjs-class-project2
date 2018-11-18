import React from "react";
const { Provider, Consumer } = React.createContext();

export const ProductDetailsConsumer = Consumer; 
export class ProductDetailsProvider extends React.Component {
    state = {
        name: "",
        introduction: "",
        price: "",
        category: "",
        image: "",
        content: ""
    }

    render() {
        return(
            <Provider
                value = {{state: this.state}}
            >
            {this.props.children}
            </Provider>
        );
    }
}