import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
const { Consumer, Provider } = React.createContext();

export const ProductConsumer = Consumer;
class ProductProvider extends React.Component {
  state = {
    list: [],
    originalList: []
  };

  get categoryType() {
    const search = queryString.parse(window.location.search);
    const categoryType = search.category ? search.category : null;

    return categoryType;
  }

  fetchProducts = () => {
    const url = 'https://fast-temple-19334.herokuapp.com/api/products';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          let list = res.data;
          const categoryType = this.categoryType;

          if (categoryType && categoryType != 'All') {
            list = list.filter(product => product.category == categoryType);
          }

          this.setState({ list, originalList: res.data });
        }
      });
  };

  updateProductList = categoryType => {
    const { originalList } = this.state;
    console.log('orginal', originalList);
    let list = originalList;

    if (categoryType && categoryType != 'All') {
      list = originalList.filter(
        product => product.category == this.categoryType
      );
    }
    this.setState({ list });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const search = queryString.parse(this.props.location.search);
    const nextSearch = queryString.parse(nextProps.location.search);

    if (search.category != nextSearch.category) {
      this.updateProductList(nextSearch.category);
    }
  }

  render() {
    return (
      <Provider
        value={{
          list: this.state.list,
          filterProductListBy: this.filterProductListBy
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

ProductProvider = withRouter(ProductProvider);

export { ProductProvider };
