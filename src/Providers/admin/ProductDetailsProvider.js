import React from "react";
const { Provider, Consumer } = React.createContext();

export const ProductDetailsConsumer = Consumer;
export class ProductDetailsProvider extends React.Component {
  API = "https://fast-temple-19334.herokuapp.com/api/products/";
  state = {
    loading: true,
    product: {
      name: "",
      introduction: "",
      price: "",
      category: "",
      image: "",
      content: "",
      _id: ""
    },
    error: null
  };

  handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    var product = this.state.product;
    product[name] = target.value;
    this.setState({
      product: product
    });
    console.log("product", product);
  };
  handleOnSubmit = e => {
    e.preventDefault();
    var id = this.state.product._id;
    const method = id == "" ? "POST" : "PUT";
    const url = id == "" ? this.API : `${this.API}${id}`;
    var product = this.state.product;
    delete product._id;
    fetch(url, {
      method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log("success");
      });
  };
  getProductById = productId => {
    if (productId != "create") {
      const url = `${this.API}${productId}`;
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.status && res.data) {
            this.setState({
              loading: false,
              product: res.data
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

  handleOnUpload = fileEl => {
    if (fileEl && fileEl.files.length > 0) {
      const formData = new FormData();
      formData.append("file", fileEl.files[0]);

      fetch("https://fast-temple-19334.herokuapp.com/upload", {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          console.log("result", result);
        });
    }
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handleOnChange: this.handleOnChange,
          handleOnSubmit: this.handleOnSubmit,
          getProductById: this.getProductById,
          handleOnUpload: this.handleOnUpload
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
