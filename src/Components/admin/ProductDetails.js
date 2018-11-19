import React from "react";
import {
  CategoryProvider,
  CategoryConsumer
} from "../../Providers/admin/CategoryListProvider.js";
class ProductDetails extends React.Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    return (
      <section className="forms">
        <div className="container-fluid">
          <header>
            <h1 className="display">Create Product</h1>
          </header>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form novalidate>
                    <div className="form-row">
                      <div className="form-group col col-md">
                        <label>Name</label>
                        <input
                          placeholder="Name"
                          name="name"
                          value={this.props.product.name}
                          onChange={this.props.handleOnChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group col col-md">
                        <label>Introduction</label>
                        <input
                          placeholder="Intro"
                          className="form-control"
                          name="introduction"
                          value={this.props.product.introduction}
                          onChange={this.props.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col col-md">
                        <label>Price</label>
                        <input
                          placeholder="Price"
                          name="price"
                          className="form-control"
                          value={this.props.product.price}
                          onChange={this.props.handleOnChange}
                        />
                      </div>
                      <div className="form-group col col-md">
                        <label>Category</label>
                        <CategoryProvider>
                          <CategoryConsumer>
                            {value => (
                              <select
                                className="form-control"
                                name="category"
                                value={this.props.product.category}
                                onChange={this.props.handleOnChange}
                              >
                                <option>Choose option</option>
                                {value.state.list.map(category => {
                                  return (
                                    <option id={category._id}>
                                      {category.name}
                                    </option>
                                  );
                                })}
                              </select>
                            )}
                          </CategoryConsumer>
                        </CategoryProvider>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col col-md">
                        <label>Image</label>
                        <input
                          type="file"
                          placeholder="URL"
                          className="form-control"
                          id = "file"
                          name="image"
                          onChange={this.props.handleOnChange}
                        />
                        <button onClick={this.props.handleOnUpload}>
                          Upload
                        </button>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col col-md">
                        <label>Content</label>
                        <textarea
                          placeholder="Content"
                          className="form-control"
                          name="content"
                          rows="5"
                          value={this.props.product.content}
                          onChange={this.props.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={this.props.handleOnSubmit}
                        >
                          Save
                        </button>
                        <button type="submit" className="btn btn-secondary">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
