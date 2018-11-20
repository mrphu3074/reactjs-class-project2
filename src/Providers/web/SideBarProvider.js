import React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

const { Consumer, Provider } = React.createContext();

export const SiderBarConsumer = Consumer;
class SideBarProvider extends React.Component {
  state = {
    list: [],
    activeItem: this.activeItem
  };

  get activeItem() {
    const params = window.location.search.split('?')[1];
    let activeItem = 'All';

    if (params) {
      activeItem = params.split('=')[1];
    }

    return activeItem;
  }

  fetchCategories = () => {
    const url = 'https://fast-temple-19334.herokuapp.com/api/categories';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          const list = [{ name: 'All' }, ...res.data];
          this.setState({ list });
        }
      });
  };

  componentDidMount() {
    this.fetchCategories();
  }

  componentWillReceiveProps(nextProps) {
    const search = queryString.parse(this.props.location.search);
    const nextSearch = queryString.parse(nextProps.location.search);

    if(search.category != nextSearch.category) {
      this.setState({ activeItem: nextSearch.category || 'All' });
    }
  }

  render() {
    return (
      <Provider
        value={{
          list: this.state.list,
          activeItem: this.state.activeItem,
          handleOnClickMenu: this.handleOnClickMenu
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

SideBarProvider = withRouter(SideBarProvider);
export { SideBarProvider };
