import React from 'react';

const { Consumer, Provider } = React.createContext();

export const SiderBarConsumer = Consumer;
export class SideBarProvider extends React.Component {
  state = {
    list: [{ name: 'kids' }, { name: 'adidas' }]
  };

  fetchCategories = () => {
    const url = 'https://fast-temple-19334.herokuapp.com/api/categories';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          this.setState({ list: res.data });
        }
      });
  };

  componentDidMount() {
    this.fetchCategories();
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
