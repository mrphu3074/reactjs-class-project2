import React from 'react';

export default function ProductDetail(props) {
  const { item } = props;
  console.log(item);
  return (
    <div>
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
            <h2>{item.name}</h2>
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
              <span>{item.price}</span>
              {/* <label>Quantity:</label>
              <input type="text" value="1" />
              <button type="button" className="btn btn-fefault cart">
                <i className="fa fa-shopping-cart" />
                Add to cart
              </button> */}
            </span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">Detail</div>
        <div className="card-body">{item.content}</div>
      </div>
    </div>
  );
}
