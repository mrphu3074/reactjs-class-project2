import React from 'react';

export default function ProductDetail(props) {
  const { item } = props;
  
  return (
    <div>
      <div className="product-details row">
        <div className="col-sm-5">
          <div className="view-product">
            <img src={item.image} alt="" />
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
              <b>Category:</b> {item.category}
            </p>
            <span>{item.price}</span>
            <p>{item.introduction}</p>
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
