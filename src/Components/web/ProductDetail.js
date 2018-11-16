import React from 'react';

export default function ProductDetail(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#sportswear"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus" />
                        </span>
                        Sportswear
                      </a>
                    </h4>
                  </div>
                  <div id="sportswear" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="#">Nike </a>
                        </li>
                        <li>
                          <a href="#">Under Armour </a>
                        </li>
                        <li>
                          <a href="#">Adidas </a>
                        </li>
                        <li>
                          <a href="#">Puma</a>
                        </li>
                        <li>
                          <a href="#">ASICS </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#mens"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus" />
                        </span>
                        Mens
                      </a>
                    </h4>
                  </div>
                  <div id="mens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="#">Fendi</a>
                        </li>
                        <li>
                          <a href="#">Guess</a>
                        </li>
                        <li>
                          <a href="#">Valentino</a>
                        </li>
                        <li>
                          <a href="#">Dior</a>
                        </li>
                        <li>
                          <a href="#">Versace</a>
                        </li>
                        <li>
                          <a href="#">Armani</a>
                        </li>
                        <li>
                          <a href="#">Prada</a>
                        </li>
                        <li>
                          <a href="#">Dolce and Gabbana</a>
                        </li>
                        <li>
                          <a href="#">Chanel</a>
                        </li>
                        <li>
                          <a href="#">Gucci</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Kids</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Fashion</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Households</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Interiors</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-9 padding-right">
            <div className="product-details">
              <div className="col-sm-5">
                <div className="view-product">
                  <img src="images/product-details/1.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="product-information">
                  <img
                    src="images/product-details/new.jpg"
                    className="newarrival"
                    alt=""
                  />
                  <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                  <p>
                    <b>Availability:</b> In Stock
                  </p>
                  <p>
                    <b>Condition:</b> New
                  </p>
                  <p>
                    <b>Brand:</b> E-SHOPPER
                  </p>
                  <span>
                    <span>US $59</span>
                    <label>Quantity:</label>
                    <input type="text" value="1" />
                    <button type="button" className="btn btn-fefault cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="category-tab shop-details-tab">
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#details" data-toggle="tab">
                      Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade clearfix active in"
                  id="details"
                  style={{ padding: '0 25px' }}
                >
                  <div className="col-sm-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <img src="images/product-details/1.jpg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
