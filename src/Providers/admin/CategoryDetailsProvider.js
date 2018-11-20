import React from "react";
import { Redirect } from "react-router-dom";
const { Provider, Consumer } = React.createContext();

export const CategoryDetailConsumer = Consumer;
export class CategoryDetailProvider extends React.Component {
  API = "https://fast-temple-19334.herokuapp.com/api/categories/";
  state = {
    loading: true,
    category: {
      name: "",
      branch: "",
      _id:""
    },
    isSuccess: false,
    error: null
  };
  handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    var categoryTemp = this.state.category;
    categoryTemp[name] = target.value;
    this.setState({
      category: categoryTemp
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    var id = this.state.category._id;
    const method = id == '' ? "POST" : "PUT";
    const url = id ==''? this.API : `${this.API}${id}`;
    var category = this.state.category;
    delete category._id;
    fetch(url, {
      method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(category)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          this.setState({
          isSuccess : true
        })
        }
      });
  };
  getCategoryById = categoryId => {
    if (categoryId != 'create') {
      const url = `${this.API}${categoryId}`;
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.status && res.data) {
            this.setState({
              loading: false,
              category: res.data
            });
          } else {
            this.setState({
              loading: false,
              error: "co loi"
            });
          }
        });
    }
  };
  render() {
    if(this.state.isSuccess === true) {
      return <Redirect to='/admin/categories'/>
    }
    return (
      <Provider
        value={{
          state: this.state,
          handleOnChange: this.handleOnChange,
          handleOnSubmit: this.handleOnSubmit,
          getCategoryById: this.getCategoryById
        }}
      >
        {" "}
        {this.props.children}
      </Provider>
    );
  }
}
