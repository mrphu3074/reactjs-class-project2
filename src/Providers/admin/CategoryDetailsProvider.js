import React from "react";
const {Provider, Consumer} = React.createContext();

export const CategoryDetailConsumer = Consumer;
export class CategoryDetailProvider extends React.Component {
    state = {
        id: "",
        name: "",
        branch: ""
    };
    handleOnChange = e => {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }
    render() {
        return (
            <Provider 
                value = {{
                    state: this.state,
                    handleOnChange: this.handleOnChange
                }}
            > {this.props.children}
            </Provider>
        );
    }
}