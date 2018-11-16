import React from "react";
import {Link} from "react-router-dom";

function PostItem(props) {
    const product = props.product;
    return(
        <tr>
            <td>{product.image}</td>
            <Link to={`/product/${product.id}`}><td>{product.id}</td></Link>
            <td>{product.name}</td>
            <td>{product.introduction}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
        </tr>
    );
}

export default PostItem;