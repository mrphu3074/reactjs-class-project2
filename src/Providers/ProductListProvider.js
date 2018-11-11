import React from "react";
const { Provider, Consumer } = React.createContext();

export const ProductListConsumer = Consumer;
export class ProductListProvider extends React.Component {
    state = {
        loading : true,
        list : [
            {
                "image": "URL1",
                "id": "1",
                "name": "name1",
                "introduction": "product 1",
                "category": "category 1",
                "price": 123
            },
            {
                "image": "URL2",
                "id": "2",
                "name": "name2",
                "introduction": "product 2",
                "category": "category 2",
                "price": 234
            }
        ]
    }

    render() {
        return(
            <Provider
                value={
                    {state: this.state}
                }
            >
                {this.props.children}
            </Provider>
        );
    }
}