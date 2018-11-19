import React from 'react';

const { Consumer, Provider } = React.createContext();

export const ProductConsumer = Consumer;
export class ProductProvider extends React.Component {
  state = {
    list: []
  };

  fetchProducts = () => {
    const url = 'https://fast-temple-19334.herokuapp.com/api/products';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if(res.status) {
          this.setState({ list: res.data });
        }
      });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <Provider
        value={{
          list: this.state.list
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
