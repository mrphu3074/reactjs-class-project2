import React from 'react';

const { Consumer, Provider } = React.createContext();

export const ProductDetailConsumer = Consumer;
export class ProductDetailProvider extends React.Component {
  state = {
    data: { name: '', price: '' }
  };

  fetchProducts = (id) => {
    const url = `https://fast-temple-19334.herokuapp.com/api/products/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          this.setState({ data: res.data });
        }
      });
  };

  componentDidMount() {
    this.fetchProducts(this.props.productId);
  }

  render() {
    return (
      <Provider
        value={{
          data: this.state.data,
          fetchProducts: this.fetchProducts
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
