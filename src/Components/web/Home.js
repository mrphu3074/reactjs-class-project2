import React from 'react';

export default function Home() {
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
            <div className="features_items">
              <h2 className="title text-center">All Items</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product1.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product2.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product3.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product4.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                      <img
                        src="../../template/web/images/home/new.png"
                        className="new"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product5.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                      <img
                        src="../../template/web/images/home/sale.png"
                        className="new"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <a
                          href="product-details.html"
                          style={{ display: 'block' }}
                        >
                          <img
                            src="../../template/web/images/home/product6.jpg"
                            alt=""
                          />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                        </a>
                      </div>
                    </div>
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
