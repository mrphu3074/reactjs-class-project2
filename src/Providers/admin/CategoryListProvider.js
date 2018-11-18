import React from "react";
const {Provider, Consumer} = React.createContext();

export const CategoryConsumer = Consumer;
export class CategoryProvider extends React.Component {
    state = {
        loading: true,
        list: [
            {
                id: 1,
                name: "Giay",
                branch: "Adidas"
            },
            {
                id: 2,
                name: "Ao",
                branch: "Nike"
            }
        ]
    }

    render(){
        return(
            <Provider value = {{state: this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}