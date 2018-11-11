import React from "react";
import ProductItem from "./ProductItem.js";
import { Link } from "react-router-dom";

function ProductList(props) {
  let list = props.list;
  console.log("list product: ", list);
  let items = list.map(items => <ProductItem product={items} />);
  return (
    <section className="charts">
      <div className="container-fluid">
        <header className="d-flex justify-content-between">
          <h1 className="display">Products</h1>
          <div>
            <Link className="btn btn-primary" to='/product/create'>Create</Link>
          </div>
        </header>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Thumb</th>
                      <th>#</th>
                      <th>Name</th>
                      <th>Introduction</th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList;